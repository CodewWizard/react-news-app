import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
         {
          source: { id: "bbc-sport", name: "BBC Sport" },
          author: null,
          title: "'Ashes has been best ever in women's cricket history'",
          description:
            "Captains Heather Knight and Alyssa Healy reflect on an epic Ashes battle that saw Australia retain the trophy at the Ageas Bowl.",
          url: "http://www.bbc.co.uk/sport/cricket/66215705",
          urlToImage:
            "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/FC43/production/_130397546_hk.jpg",
          publishedAt: "2023-07-17T05:22:16.3104085Z",
          content:
            "This summer's Ashes has been the \"best series ever in women's cricket history\", says England captain Heather Knight. \r\nEngland have not won the Ashes for a decade, but both sides have played their pa… [+3240 chars]",
        },
        {
          source: { id: "espn-cric-info", name: "ESPN Cric Info" },
          author: null,
          title:
            "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
          description:
            "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
          url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
          urlToImage:
            "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
          publishedAt: "2020-04-27T11:41:47Z",
          content:
            "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
        },
        {
          source: { id: "espn-cric-info", name: "ESPN Cric Info" },
          author: null,
          title:
            "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
          description:
            "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
          url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
          urlToImage:
            "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
          publishedAt: "2020-03-30T15:26:05Z",
          content:
            "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
        },
  ];
  constructor() {
    super();
    console.log("contructor dd");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
        <div className="container my-3">
          <h2>NewsMonkey - Top Headlines</h2>
          <div className="row">
            {this.state.articles.map((element) => {
              return <div key={element.url} className="col-md-4">
                  <NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage} />
                </div>
            })}
          </div>
        </div>
    );
  }
}

export default News;
