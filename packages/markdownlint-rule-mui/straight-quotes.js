module.exports = {
  names: ['straightQuotes'],
  description: 'Only allow straight quotes.',
  tags: ['spelling'],
  function: (params, onError) => {
    params.lines.forEach((line, lineNumber) => {
      // It will match
      // opening single quote: \xE2\x80\x98
      // closing single quote: \xE2\x80\x99
      // opening double quote: \xE2\x80\x9C
      // closing double quote: \xE2\x80\x9D
      if (line.match('[‘’“”]')) {
        onError({
          lineNumber,
          details: `For line: ${line}`,
        });
      }
    });
  },
};
