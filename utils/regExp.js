const linkCheck = (link) => {
  const regExp = /(https?:\/\/)(w{3}\.)?([a-zA-Z0-9-]{0,63}\.)([a-zA-Z]{2,4})(\/[\w\-._~:/?#[\]@!$&'()*+,;=]#?)?/;
  if (regExp.test(link)) return link;
  throw new Error('Некорректная ссылка.');
};

module.exports = { linkCheck };
