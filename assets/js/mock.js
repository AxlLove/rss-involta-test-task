export const mockMos = {
  type: 'https://www.mos.ru/',
  title: 'Сергей Собянин вручил премии Москвы в области обеспечения безопасности',
  description: 'Премии присуждают за вклад в обеспечение комплексной безопасности столицы, создание научных разработок и технологий, которые могут быть внедрены в этой сфере. ',
  link: 'https://www.mos.ru/mayor/themes/10299/9017050/',
  pubDate: 'Mon, 20 Feb 2023 20:03:00 +0300',
  image: 'https://www.mos.ru/upload/newsfeed/news/MAX_3433(17).jpg'
}

const mockLenta = {
  type: 'www.lenta.ru',
  title: 'Названо число погибших и пострадавших из-за новых землетрясений в Турции',
  description: 'Вице-президент Турции Фуат Октай рассказал, что в результате новых землетрясений на юго-востоке страны пострадали восемь человек. Он назвал число получивших травмы из-за подземных толчков. «Ранения получили восемь человек, они доставлены в больницы», — подчеркнул политик.',
  link: 'https://lenta.ru/news/2023/02/20/earth/',
  pubDate: 'Mon, 20 Feb 2023 22:11:00 +0300',
  image: 'https://icdn.lenta.ru/images/2023/02/20/22/20230220220955252/pic_0676c0799dbda101f8ed6158565f3e40.jpg'
}


export const mockFeed = () => {
  const arr = [];
  for (let i = 1; i <= 20; i++) {
    const randomN = Math.floor(Math.random() * 2) + 1
    randomN === 1? arr.push({...mockLenta, id: i}) : arr.push({...mockMos, id: i})
  }
  return arr
};
