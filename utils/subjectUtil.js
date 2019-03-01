// 将导演主演从数组中取出来拼接成一个字符串
function processSubject(subject) {
  // 获取电影名称
  var title = subject.title;
  // 获取导演数组中的信息
  var directors = subject.directors;
  //定义一个空的字符串用来存储处理后的结果
  var directorsStr = "";
  for (var index in directors) {
    directorsStr = directorsStr + directors[index].name + " / ";
  }
  // 去除完成后字符串的最后的空格和斜线
  if (directorsStr != "") {
    directorsStr = directorsStr.substring(0, directorsStr.length - 2);
  }
  // 演员
  var casts = subject.casts;
  var castStr = "";
  for (var index in casts) {
    castStr = castStr + casts[index].name + " / ";
  }
  if (castStr != "") {
    castStr = castStr.substring(0, castStr.length - 2);
  }
  // 电影类型
  var genres = subject.genres;
  var genresStr = "";
  for (var index in genres) {
    genresStr = genresStr + genres[index] + " / ";
  }
  if (genresStr != "") {
    genresStr = genresStr.substring(0, genresStr.length - 2);
  }
  var year = subject.year;
  // 最后将获取到的电影信息拼接成一个串
  var text = "名称: " + title + "\n导演：" + directorsStr + "\n主演：" + castStr + "\n类型：" + genresStr + "\n上映年份：" + year + "(中国大陆)";
  subject.text = text;
}

function processSubjects(subjects) {
  for (var i = 0; i < subjects.length; i++) {
    var subject = subjects[i];
    this.processSubject(subject);
  }
}
module.exports = {
  processSubject: processSubject,
  processSubjects: processSubjects
}