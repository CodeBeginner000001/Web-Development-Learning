import React, { useEffect, useState } from 'react';
import NewItem from './NewItem.mjs';
import Spinner from './Spinner.mjs';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
import { v4 as uuidv4 } from 'uuid';
const News = (props) => {
  // articles = [
  //   {
  //     "source": {
  //       "id": "polygon",
  //       "name": "Polygon"
  //     },
  //     "author": "Oli Welsh",
  //     "title": "Game Pass July 2024 update adds Flock, The Case of the Golden Idol",
  //     "description": "The first batch of new Game Pass games for July 2024 includes several indie favorites like Neon White and Tchia, as well as Cricket 24",
  //     "url": "https://www.polygon.com/24190770/game-pass-july-2024-free-xbox-games-case-of-the-golden-idol-tchia-neon-white-flock",
  //     "urlToImage": "https://cdn.vox-cdn.com/thumbor/Zoc7c7NvPhp3QpOUwsky70QU3zM=/0x0:1200x628/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24265929/goldenidol.jpeg",
  //     "publishedAt": "2024-07-02T17:43:15Z",
  //     "content": "Microsoft has revealed whats coming to Game Pass during the first half of July and, while absent any big-hitters, the lineup features at least four really excellent indie games that will be well wort… [+2126 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "abc-news-au",
  //       "name": "ABC News (AU)"
  //     },
  //     "author": "ABC News",
  //     "title": "England cricket great Ted Dexter diesaged 86",
  //     "description": "The former England captain, nicknamed \"Lord Ted\", is fondly remembered as a giant of the game and one of his country'sgreatest players.",
  //     "url": "http: //www.abc.net.au/news/2021-08-26/england-cricket-great-ted-dexter-dies-aged-86/100411276",
  //     "urlToImage": "https://live-production.wcms.abc-cdn.net.au/1006c7ecf34ec0935eef2aade5017711/impolicy=wcms_crop_resize&cropH=2815&cropW=5004&xPos=0&yPos=223&width=862&height=485",
  //     "publishedAt": "2021-08-26T09: 07: 527",
  //     "content": "Former England captain Ted Dexter hasdied aged 86 following a recent illness. \r\n<ul>li>Dexter played 62 Tests for England andwas captain on 30 occasions‹/li›li›He was inducted into the ICC Hall of... [+1746 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "espn-cric-info",
  //       "name": "ESPN Cric Info"
  //     },
  //     "author": null,
  //     "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  //     "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  //     "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  //     "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  //     "publishedAt": "2020-04-27T11:41:47Z",
  //     "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "four-four-two",
  //       "name": "FourFourTwo"
  //     },
  //     "author": "Ben Hayward",
  //     "title": "Thiago Alcantara: Former Liverpool midfielder to announce retirement from football",
  //     "description": "Former Liverpool midfielder Thiago Alcantara has decided to retire from professional football",
  //     "url": "https://www.fourfourtwo.com/news/thiago-alcantara-former-liverpool-barcelona-bayern-munich-midfielder-to-announce-retirement-from-football",
  //     "urlToImage": "https://cdn.mos.cms.futurecdn.net/Wd6PWtDzdH6UNrsjL5bcdZ-1200-80.jpg",
  //     "publishedAt": "2024-07-07T15:20:00Z",
  //     "content": "Thiago Alcantara is to announce his retirement from professional football after leaving Liverpool at the end of last season.\r\nThiago started his career at Barcelona and moved to Bayern Munich in 2013… [+1885 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "four-four-two",
  //       "name": "FourFourTwo"
  //     },
  //     "author": "Matthew Ketchell",
  //     "title": "Manchester United are on the verge of signing a forward responsible for possibly the worst miss in football history",
  //     "description": "Manchester United are said to be closing in on a top striker signing this summer",
  //     "url": "https://www.fourfourtwo.com/news/manchester-united-are-on-the-verge-of-signing-a-forward-responsible-for-possibly-the-worst-miss-in-football-history",
  //     "urlToImage": "https://cdn.mos.cms.futurecdn.net/5JWZMgjjbP6Kcf5KomgWNf-1200-80.jpg",
  //     "publishedAt": "2024-07-07T15:00:00Z",
  //     "content": "Manchester United are said to have agreed personal terms with Bologna forward Joshua Zirkzee.\r\nThe talented Dutchman is set to arrive and provide healthy competition for Rasmus Hojlund in attack, wit… [+3260 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "espn-cric-info",
  //       "name": "ESPN Cric Info"
  //     },
  //     "author": null,
  //     "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //     "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //     "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //     "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //     "publishedAt": "2020-03-30T15:26:05Z",
  //     "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  //   }
  // ]
  let [articles, setArticles] = useState([])
  let [loading, setLoading] = useState(true)
  let [page, setPage] = useState(1)
  let [totalResult, setTotalResult] = useState(0)


  const captialFirstLetter = (string) => {
    return string[0].toUpperCase() + string.slice(1);
  }


  const updateNow = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&apiKey=${props.api_key}&country=${props.country}&page=${page}&pageSize=${props.pageSize}`
    let data = await fetch(url);
    setLoading(true);
    props.setProgress(30);
    let Jsondata = await data.json();
    props.setProgress(70);
    setArticles(Jsondata.articles);
    setTotalResult(Jsondata.totalResults);
    setLoading(false);
    props.setProgress(100);

  }

  useEffect(() => {
    document.title = `${captialFirstLetter(props.category)} - NewsBox`
    updateNow();
  }, [])

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&apiKey=${props.api_key}&country=${props.country}&page=${page + 1}&pageSize=${props.pageSize}`
    setPage(page + 1)
    let data = await fetch(url);
    let Jsondata = await data.json();
    setArticles(articles.concat(Jsondata.articles));
    setTotalResult(Jsondata.totalResults);
  };
  return (
    <>
      <h1 className='text-center' style={{ margin: "35px 0", marginTop: "90px" }}>NewsBox - Top {captialFirstLetter(props.category)} Headlines</h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResult}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="d-flex justify-content-around flex-wrap">
            {
              articles.map((element) => {
                return (
                  <div key={uuidv4()}>
                    <NewItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage ? element.urlToImage : ""} Url={element.url ? element.url : ""} author={element.author} date={element.publishedAt} source={element.source} />
                  </div>)
              })
            }
          </div>
        </div>
      </InfiniteScroll>
    </>
  )
}

News.defaultProps = {
  country: 'in',
  pageSize: 12

}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  api_key: PropTypes.string,
}



export default News;
