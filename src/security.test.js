import fs from 'fs';
import path from 'path';

describe('Phase G: Security Hardening Sanity Checks', () => {
  test('firebase.json enforces required HTTP security headers', () => {
    const raw = fs.readFileSync(path.resolve(process.cwd(), 'firebase.json'), 'utf8');
    const config = JSON.parse(raw);

    expect(config.hosting).toBeDefined();
    expect(config.hosting.headers).toBeDefined();

    const wildcardRule = config.hosting.headers.find((h) => h.source === '**');
    expect(wildcardRule).toBeDefined();

    const headerKeys = wildcardRule.headers.map((h) => h.key);
    expect(headerKeys).toContain('X-Content-Type-Options');
    expect(headerKeys).toContain('X-Frame-Options');
    expect(headerKeys).toContain('X-XSS-Protection');
    expect(headerKeys).toContain('Referrer-Policy');
    expect(headerKeys).toContain('Permissions-Policy');

    const frameHeader = wildcardRule.headers.find((h) => h.key === 'X-Frame-Options');
    expect(frameHeader.value).toBe('DENY');

    const contentTypeHeader = wildcardRule.headers.find((h) => h.key === 'X-Content-Type-Options');
    expect(contentTypeHeader.value).toBe('nosniff');
  });

  test('package.json has clean dependency hygiene without obsolete nvm package', () => {
    const raw = fs.readFileSync(path.resolve(process.cwd(), 'package.json'), 'utf8');
    const pkg = JSON.parse(raw);

    expect(pkg.dependencies.nvm).toBeUndefined();
  });

  test('All external anchor tags specify rel="noopener noreferrer" and no dangerouslySetInnerHTML exists', () => {
    const srcDir = path.resolve(process.cwd(), 'src');

    function checkDirectory(dir) {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          checkDirectory(fullPath);
        } else if ((entry.name.endsWith('.js') || entry.name.endsWith('.jsx')) && !entry.name.endsWith('.test.js')) {
          const content = fs.readFileSync(fullPath, 'utf8');

          // Verify no XSS vulnerability via raw HTML insertion
          expect(content.includes('dangerouslySetInnerHTML')).toBe(false);

          // Verify all target="_blank" links have noopener noreferrer
          const anchorRegex = /<a\s+[^>]*target=["']_blank["'][^>]*>/gi;
          let match;
          while ((match = anchorRegex.exec(content)) !== null) {
            const tagStr = match[0];
            expect(tagStr.includes('rel=')).toBe(true);
            expect(tagStr.includes('noopener')).toBe(true);
            expect(tagStr.includes('noreferrer')).toBe(true);
          }
        }
      }
    }

    checkDirectory(srcDir);
  });
});
