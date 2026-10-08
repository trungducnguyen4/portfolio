import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { marked } from 'marked';

const dir = path.resolve('interview-prep');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const files = [
  {
    src: '01_INTERVIEW_PREP_EXAMTRUST.md',
    pdf: '01_INTERVIEW_PREP_EXAMTRUST.pdf',
    title: 'ExamTrust — Tài Liệu Ôn Tập Phỏng Vấn Chuyên Sâu',
  },
  {
    src: '02_INTERVIEW_PREP_HR_MANAGER.md',
    pdf: '02_INTERVIEW_PREP_HR_MANAGER.pdf',
    title: 'NetViet HR Pro — Tài Liệu Ôn Tập Phỏng Vấn Chuyên Sâu',
  },
  {
    src: '03_INTERVIEW_PREP_TECH_STACK.md',
    pdf: '03_INTERVIEW_PREP_TECH_STACK.pdf',
    title: 'Tech Stack Toàn Diện — Tài Liệu Ôn Tập Phỏng Vấn Chuyên Sâu',
  },
];

const cssStyle = `
  @page {
    size: A4;
    margin: 18mm 14mm 18mm 14mm;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    color: #1e293b;
    line-height: 1.65;
    font-size: 13px;
    background: #ffffff;
    margin: 0;
    padding: 0;
  }
  h1 {
    font-size: 24px;
    font-weight: 900;
    color: #0f172a;
    border-bottom: 2.5px solid #dc2626;
    padding-bottom: 8px;
    margin-top: 0;
    margin-bottom: 14px;
    page-break-after: avoid;
  }
  h2 {
    font-size: 17px;
    font-weight: 800;
    color: #0f172a;
    border-bottom: 1.5px solid #e2e8f0;
    padding-bottom: 6px;
    margin-top: 24px;
    margin-bottom: 12px;
    page-break-after: avoid;
  }
  h3 {
    font-size: 14.5px;
    font-weight: 700;
    color: #b91c1c;
    margin-top: 18px;
    margin-bottom: 8px;
    page-break-after: avoid;
  }
  h4, h5, h6 {
    font-size: 13.5px;
    font-weight: 700;
    color: #334155;
    margin-top: 14px;
    margin-bottom: 6px;
    page-break-after: avoid;
  }
  p {
    margin-top: 0;
    margin-bottom: 10px;
    text-align: justify;
  }
  strong {
    color: #0f172a;
    font-weight: 700;
  }
  blockquote {
    margin: 12px 0;
    padding: 10px 14px;
    background: #f8fafc;
    border-left: 4px solid #dc2626;
    color: #334155;
    border-radius: 0 8px 8px 0;
    page-break-inside: avoid;
  }
  blockquote p {
    margin-bottom: 6px;
  }
  blockquote p:last-child {
    margin-bottom: 0;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 14px 0;
    font-size: 12px;
    page-break-inside: avoid;
  }
  th, td {
    padding: 8px 10px;
    border: 1px solid #cbd5e1;
    text-align: left;
    vertical-align: top;
  }
  th {
    background: #f1f5f9;
    color: #0f172a;
    font-weight: 700;
  }
  tr:nth-child(even) {
    background: #f8fafc;
  }
  code {
    font-family: Consolas, Monaco, "Courier New", monospace;
    font-size: 11.5px;
    background: #f1f5f9;
    color: #b91c1c;
    padding: 1.5px 5px;
    border-radius: 4px;
    border: 1px solid #e2e8f0;
  }
  pre {
    background: #0f172a;
    color: #f8fafc;
    padding: 12px 14px;
    border-radius: 8px;
    overflow-x: auto;
    font-size: 11.5px;
    line-height: 1.5;
    margin: 12px 0;
    page-break-inside: avoid;
  }
  pre code {
    background: transparent;
    color: #f8fafc;
    padding: 0;
    border: none;
    font-size: 11.5px;
  }
  ul, ol {
    margin-top: 0;
    margin-bottom: 12px;
    padding-left: 22px;
  }
  li {
    margin-bottom: 4px;
  }
  hr {
    border: none;
    border-top: 1px solid #e2e8f0;
    margin: 20px 0;
  }
  .doc-header {
    margin-bottom: 20px;
    padding-bottom: 14px;
    border-bottom: 2px solid #e2e8f0;
  }
  .doc-badge {
    display: inline-block;
    padding: 3px 10px;
    border-radius: 9999px;
    background: #fef2f2;
    color: #b91c1c;
    border: 1px solid #fecaca;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 8px;
  }
`;

for (const f of files) {
  const mdPath = path.join(dir, f.src);
  const pdfPath = path.join(dir, f.pdf);
  const htmlPath = path.join(dir, f.src.replace('.md', '.html'));

  console.log(`\n⏳ Đang xử lý: ${f.src} -> ${f.pdf}...`);

  const mdContent = fs.readFileSync(mdPath, 'utf-8');
  const bodyHtml = marked.parse(mdContent);

  const fullHtml = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>${f.title}</title>
  <style>${cssStyle}</style>
</head>
<body>
  ${bodyHtml}
</body>
</html>`;

  fs.writeFileSync(htmlPath, fullHtml, 'utf-8');

  const tempPdfPath = path.join(dir, `_temp_${f.pdf}`);
  try {
    execFileSync(chromePath, [
      '--headless=new',
      '--disable-gpu',
      '--no-pdf-header-footer',
      `--print-to-pdf=${tempPdfPath}`,
      htmlPath,
    ]);

    if (fs.existsSync(tempPdfPath)) {
      try {
        fs.copyFileSync(tempPdfPath, pdfPath);
        fs.unlinkSync(tempPdfPath);
        const stats = fs.statSync(pdfPath);
        console.log(`✅ Thành công: ${f.pdf} (${Math.round(stats.size / 1024)} KB)`);
      } catch (copyErr) {
        // File đích đang bị mở bởi Foxit / PDF reader
        const fallbackPdf = path.join(dir, f.pdf.replace('.pdf', '_updated.pdf'));
        fs.copyFileSync(tempPdfPath, fallbackPdf);
        fs.unlinkSync(tempPdfPath);
        const stats = fs.statSync(fallbackPdf);
        console.log(`⚠️ File ${f.pdf} đang mở trong ứng dụng khác. Đã lưu bản mới nhất tại: ${path.basename(fallbackPdf)} (${Math.round(stats.size / 1024)} KB)`);
      }
    } else {
      console.error(`❌ Không tìm thấy file PDF đầu ra: ${pdfPath}`);
    }
  } catch (err) {
    console.error(`❌ Lỗi khi xuất PDF cho ${f.src}:`, err);
  } finally {
    if (fs.existsSync(htmlPath)) {
      fs.unlinkSync(htmlPath);
    }
    if (fs.existsSync(tempPdfPath)) {
      fs.unlinkSync(tempPdfPath);
    }
  }
}

console.log('\n🎉 Hoàn thành chuyển đổi 3 file Markdown sang PDF!');
