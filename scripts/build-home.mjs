import fs from 'fs';

const html = fs.readFileSync('exemplo/vesk-home.html', 'utf8');
let body = html.match(/<body>([\s\S]*)<\/body>/)[1].trim();
body = body.replace(/<!--[\s\S]*?-->/g, '');
body = body.replace(/\bclass=/g, 'className=');
body = body.replace(/stroke-width/g, 'strokeWidth');
body = body.replace(/stop-color/g, 'stopColor');
body = body.replace(/stop-opacity/g, 'stopOpacity');
body = body.replace(/onsubmit="return false;"/g, 'onSubmit={(e) => e.preventDefault()}');

const styles = [
  ['style="color:var(--orange);"', "style={{ color: 'var(--orange)' }}"],
  ['style="flex:1"', 'style={{ flex: 1 }}'],
  ['style="color:#60a5fa;"', "style={{ color: '#60a5fa' }}"],
  ['style="font-size:36px;"', 'style={{ fontSize: 36 }}'],
  ['style="margin-top:36px; display:inline-flex;"', "style={{ marginTop: 36, display: 'inline-flex' }}"],
  ['style="align-self:flex-start; cursor:pointer; border:none;"', "style={{ alignSelf: 'flex-start', cursor: 'pointer', border: 'none' }}"],
  ['style="white-space:nowrap;"', "style={{ whiteSpace: 'nowrap' }}"],
];

for (const [from, to] of styles) {
  body = body.split(from).join(to);
}

body = body.replace(/<br>/g, '<br />');
body = body.replace(/<input([^>]*?)>/g, '<input$1 />');
body = body.replace(/<textarea([^>]*?)><\/textarea>/g, '<textarea$1></textarea>');

const indented = body
  .split('\n')
  .map((line) => `    ${line}`)
  .join('\n');

const out = `import './vesk-home.css';

const Home = () => (
  <div className="vesk-home">
${indented}
  </div>
);

export default Home;
`;

fs.writeFileSync('src/pages/Home.tsx', out);
console.log('Home.tsx written');
