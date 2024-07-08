import React, { Component } from 'react'
import NewItem from './NewItem.mjs'

export class News extends Component {
  articles = [
    {
      "source": {
        "id": "polygon",
        "name": "Polygon"
      },
      "author": "Oli Welsh",
      "title": "Game Pass July 2024 update adds Flock, The Case of the Golden Idol",
      "description": "The first batch of new Game Pass games for July 2024 includes several indie favorites like Neon White and Tchia, as well as Cricket 24",
      "url": "https://www.polygon.com/24190770/game-pass-july-2024-free-xbox-games-case-of-the-golden-idol-tchia-neon-white-flock",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/Zoc7c7NvPhp3QpOUwsky70QU3zM=/0x0:1200x628/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24265929/goldenidol.jpeg",
      "publishedAt": "2024-07-02T17:43:15Z",
      "content": "Microsoft has revealed whats coming to Game Pass during the first half of July and, while absent any big-hitters, the lineup features at least four really excellent indie games that will be well wort… [+2126 chars]"
    },
    {
      "source": {
        "id": "abc-news-au",
        "name": "ABC News (AU)"
      },
      "author": "Steve Vivian",
      "title": "The journey of Michael Graham, aka 'The Flash', to the Australian Football Hall of Fame",
      "description": "Known as the \"The Flash\" for his breathtaking pace on the footy field in the 70s and 80s, Michael Graham's induction to the Australian Football Hall of Fame has capped off his journey from the Point Pearce mission to footballing immortality.",
      "url": "https://www.abc.net.au/news/2024-07-07/michael-graham-australian-football-hall-of-fame-sturt-st-marys/104042696",
      "urlToImage": "https://live-production.wcms.abc-cdn.net.au/c8d2bfe7153bc9b88e5f8e3d10e9f5ca?impolicy=wcms_watermark_news&cropH=1023&cropW=1819&xPos=0&yPos=231&width=862&height=485&imformat=generic",
      "publishedAt": "2024-07-06T22:53:32Z",
      "content": "Michael Graham, a champion footballer for Sturt in South Australia and St Mary's in the Northern Territory, was so renowned for dashing past opponents he earned one of footy's great monikers: \"The Fl… [+4170 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": {
        "id": "four-four-two",
        "name": "FourFourTwo"
      },
      "author": "Ben Hayward",
      "title": "Thiago Alcantara: Former Liverpool midfielder to announce retirement from football",
      "description": "Former Liverpool midfielder Thiago Alcantara has decided to retire from professional football",
      "url": "https://www.fourfourtwo.com/news/thiago-alcantara-former-liverpool-barcelona-bayern-munich-midfielder-to-announce-retirement-from-football",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/Wd6PWtDzdH6UNrsjL5bcdZ-1200-80.jpg",
      "publishedAt": "2024-07-07T15:20:00Z",
      "content": "Thiago Alcantara is to announce his retirement from professional football after leaving Liverpool at the end of last season.\r\nThiago started his career at Barcelona and moved to Bayern Munich in 2013… [+1885 chars]"
    },
    {
      "source": {
        "id": "four-four-two",
        "name": "FourFourTwo"
      },
      "author": "Matthew Ketchell",
      "title": "Manchester United are on the verge of signing a forward responsible for possibly the worst miss in football history",
      "description": "Manchester United are said to be closing in on a top striker signing this summer",
      "url": "https://www.fourfourtwo.com/news/manchester-united-are-on-the-verge-of-signing-a-forward-responsible-for-possibly-the-worst-miss-in-football-history",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/5JWZMgjjbP6Kcf5KomgWNf-1200-80.jpg",
      "publishedAt": "2024-07-07T15:00:00Z",
      "content": "Manchester United are said to have agreed personal terms with Bologna forward Joshua Zirkzee.\r\nThe talented Dutchman is set to arrive and provide healthy competition for Rasmus Hojlund in attack, wit… [+3260 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    }
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?category=sports&apiKey=eceb2ac4713042f3849d09ac7a25c7e2&country=in"
    let data = await fetch(url);
    let Jsondata = await data.json();
    console.log(Jsondata);
    this.setState({
      articles: Jsondata.articles,
    })
  }

  render() {
    return (
      <div className='container my-3'>
        <h1 className='container my-4 mx-3'>NewsBox - Top Headlines</h1>
        <div className="d-flex justify-content-around align-items-center flex-wrap">
          {
            this.state.articles.map((element) => {
              return (
              <div key={element.url}>
                <NewItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage ? element.urlToImage : ""} Url={element.url ? element.url : ""} />
              </div>)
            })
          }
        </div>
      </div>
    )
  }
}

export default News;
