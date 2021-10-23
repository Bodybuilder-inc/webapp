/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  excludeFile: (str) => /\*.{spec,test}.js/.test(str),
}
