// Editorial decade selections with sourced facts. Separate from the original club scoring model.
const DECADE_DATA = {
  "checked": "2026-10-31",
  "methodology": "Champions Lab editorial selections, not official UEFA decade awards or a statistical ranking. One European Cup / Champions League player per calendar decade, balancing peak performances, influence and European success. Seasons are assigned by their final year. The 1950s begin with the competition’s first final in 1956; the 2020s pick is provisional through this snapshot. The record under each pick supports the rationale, not an objective claim that alternatives are inferior. Career totals and other competitions do not determine these selections.",
  "picks": [
    {
      "decade": "1950s",
      "playerId": "alfredo-di-stefano",
      "reason": "Our pick for his defining role in the competition’s first dynasty: four winning finals before the decade ended.",
      "record": "4 European Cups in this decade · 1956, 1957, 1958, 1959",
      "source": "https://www.uefa.com/uefachampionsleague/news/0253-0d7f4e11f0ad-0976d26c2c98-1000--lucky-charms-top-european-cup-winners/",
      "alternatives": "Francisco Gento · Raymond Kopa"
    },
    {
      "decade": "1960s",
      "playerId": "eusebio",
      "reason": "Our pick for a decade-defining final performance and the attacking identity he gave Benfica.",
      "record": "2 goals in the 1962 final · Benfica 5–3 Real Madrid",
      "source": "https://www.uefa.com/uefachampionsleague/news/0258-0e6a045944ea-75ee25be6a88-1000--1961-62-eusebio-strikes-gold-for-benfica/",
      "alternatives": "Francisco Gento · Gianni Rivera"
    },
    {
      "decade": "1970s",
      "playerId": "johan-cruyff",
      "reason": "Our pick for the influence of Total Football and three successive Ajax triumphs, including his two-goal 1972 final.",
      "record": "3 European Cups in this decade · 1971, 1972, 1973",
      "source": "https://www.uefa.com/uefachampionsleague/news/022d-0e90fc10974b-cb5bd86b8f7d-1000--who-has-won-as-player-and-coach/",
      "alternatives": "Franz Beckenbauer · Gerd Müller"
    },
    {
      "decade": "1980s",
      "playerId": "marco-van-basten",
      "reason": "A peak-performance pick: his finishing in the 1989 final made him the attacking face of Milan’s rise. This is not a decade title-count award.",
      "record": "2 goals in the 1989 final · Milan 4–0 Steaua",
      "source": "https://www.uefa.com/uefachampionsleague/match/924/",
      "alternatives": "Kenny Dalglish · Michel Platini"
    },
    {
      "decade": "1990s",
      "playerId": "paolo-maldini",
      "reason": "Our defensive pick for elite consistency across Milan’s European eras and two titles during the 1990s.",
      "record": "2 European Cups in this decade · 1990 and 1994",
      "source": "https://www.uefa.com/uefachampionsleague/news/018f-0e6a5e8eb098-7dcc3c71f617-1000--two-more-years-for-maldini/",
      "alternatives": "Clarence Seedorf · Raúl"
    },
    {
      "decade": "2000s",
      "playerId": "messi",
      "reason": "A peak-performance pick for his 2009 campaign: the competition’s leading scorer and a goalscorer in the final. Later achievements are excluded from this rationale.",
      "record": "9 goals in 2008/09 · top scorer and champion",
      "source": "https://www.uefa.com/uefachampionsleague/news/01d9-0e723fa0bf50-a11f10e8b995-1000--messi-sweeps-up-goalscoring-honours/",
      "alternatives": "Kaká · Ronaldinho · Zinédine Zidane"
    },
    {
      "decade": "2010s",
      "playerId": "ronaldo",
      "reason": "Our pick for sustained knockout impact and four Real Madrid titles within the decade.",
      "record": "4 final wins in this decade · 2014, 2016, 2017, 2018",
      "source": "https://www.uefa.com/news/0271-143eb8578b52-ef62f1a96d02-1000--most-champions-league-titles/",
      "alternatives": "Lionel Messi · Luka Modrić"
    },
    {
      "decade": "2020s",
      "playerId": "benzema",
      "reason": "Provisional pick for the exceptional peak of his 2021/22 title-winning campaign, when UEFA named him Player of the Season. The decade is unfinished.",
      "record": "15 goals in 2021/22 · UEFA Player of the Season",
      "source": "https://www.uefa.com/uefachampionsleague/news/0275-15465014cfaf-b4d5f6398256-1000/",
      "provisional": true,
      "alternatives": "Robert Lewandowski · Vinícius Júnior · Erling Haaland"
    }
  ],
  "newPlayers": [
    {
      "id": "eusebio",
      "name": "Eusébio",
      "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Eusebio_(1963).jpg?width=500",
      "caption": "Eusébio — sourced archive photograph; photo date differs from record season",
      "position": "center 20%",
      "accent": "#95aac8",
      "club": "Benfica",
      "nationality": "Portugal",
      "role": "Forward",
      "decades": [
        "1960s",
        "1970s"
      ],
      "tag": "European legends",
      "label": "The Benfica icon",
      "goals": null,
      "metricValue": 2,
      "metricLabel": "Goals in the 1962 final",
      "metricScope": "1962 European Cup final only; Benfica 5–3 Real Madrid.",
      "stats": [
        {
          "label": "Goals in the 1962 final",
          "value": 2,
          "scope": "1962 European Cup final only; Benfica 5–3 Real Madrid.",
          "source": "https://www.uefa.com/uefachampionsleague/news/0258-0e6a045944ea-75ee25be6a88-1000--1961-62-eusebio-strikes-gold-for-benfica/"
        }
      ],
      "milestone": "European champion",
      "period": "1961/62",
      "story": "His two second-half goals settled Benfica’s 1962 European Cup final against Real Madrid.",
      "fact": "The final was level at 3–3 before Eusébio’s penalty and second goal put Benfica clear.",
      "factSource": "https://www.uefa.com/uefachampionsleague/news/0258-0e6a045944ea-75ee25be6a88-1000--1961-62-eusebio-strikes-gold-for-benfica/",
      "goalSource": "https://www.uefa.com/uefachampionsleague/news/0258-0e6a045944ea-75ee25be6a88-1000--1961-62-eusebio-strikes-gold-for-benfica/",
      "source": "https://commons.wikimedia.org/wiki/File:Eusebio_(1963).jpg",
      "author": "Harry Pot / Anefo / Nationaal Archief",
      "license": "CC BY-SA 3.0 NL",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/nl/",
      "extended": true,
      "photoNote": "Source image displayed with a CSS crop; source license retained. Archive portrait, not a claim of current club membership."
    },
    {
      "id": "johan-cruyff",
      "name": "Johan Cruyff",
      "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Johan_Cruijff_(1974).jpg?width=500",
      "caption": "Johan Cruyff — sourced archive photograph; photo date differs from record season",
      "position": "center 20%",
      "accent": "#95aac8",
      "club": "Ajax",
      "nationality": "Netherlands",
      "role": "Forward",
      "decades": [
        "1960s",
        "1970s"
      ],
      "tag": "European legends",
      "label": "Total Football",
      "goals": null,
      "metricValue": 3,
      "metricLabel": "European Cups as a player",
      "metricScope": "Ajax, 1971, 1972 and 1973. Coaching titles are excluded.",
      "stats": [
        {
          "label": "European Cups as a player",
          "value": 3,
          "scope": "Ajax, 1971, 1972 and 1973. Coaching titles are excluded.",
          "source": "https://www.uefa.com/uefachampionsleague/news/022d-0e90fc10974b-cb5bd86b8f7d-1000--who-has-won-as-player-and-coach/"
        }
      ],
      "milestone": "Three consecutive titles",
      "period": "1971–1973",
      "story": "The centrepiece of Ajax’s Total Football era, with three consecutive European Cups.",
      "fact": "He scored both goals in the 1972 final. His later 1992 title as Barcelona coach is a separate achievement.",
      "factSource": "https://www.uefa.com/uefachampionsleague/news/022d-0e90fc10974b-cb5bd86b8f7d-1000--who-has-won-as-player-and-coach/",
      "goalSource": "https://www.uefa.com/uefachampionsleague/news/022d-0e90fc10974b-cb5bd86b8f7d-1000--who-has-won-as-player-and-coach/",
      "source": "https://commons.wikimedia.org/wiki/File:Johan_Cruijff_(1974).jpg",
      "author": "Rob Mieremet / Anefo / Nationaal Archief",
      "license": "CC0 1.0",
      "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
      "extended": true,
      "photoNote": "Source image displayed with a CSS crop; source license retained. Archive portrait, not a claim of current club membership."
    },
    {
      "id": "marco-van-basten",
      "name": "Marco van Basten",
      "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Marco_van_Basten_1989_crop.jpg?width=500",
      "caption": "Marco van Basten — sourced archive photograph; photo date differs from record season",
      "position": "center 20%",
      "accent": "#95aac8",
      "club": "AC Milan",
      "nationality": "Netherlands",
      "role": "Forward",
      "decades": [
        "1980s",
        "1990s"
      ],
      "tag": "European legends",
      "label": "The complete striker",
      "goals": null,
      "metricValue": 2,
      "metricLabel": "Goals in the 1989 final",
      "metricScope": "1989 European Cup final only; Milan 4–0 Steaua București.",
      "stats": [
        {
          "label": "Goals in the 1989 final",
          "value": 2,
          "scope": "1989 European Cup final only; Milan 4–0 Steaua București.",
          "source": "https://www.uefa.com/uefachampionsleague/match/924/"
        }
      ],
      "milestone": "A final brace",
      "period": "1988/89",
      "story": "Two goals in Milan’s 4–0 final victory helped announce a new European powerhouse.",
      "fact": "Ruud Gullit also scored twice in that final, sharing the four goals with Van Basten.",
      "factSource": "https://www.uefa.com/uefachampionsleague/match/924/",
      "goalSource": "https://www.uefa.com/uefachampionsleague/match/924/",
      "source": "https://commons.wikimedia.org/wiki/File:Marco_van_Basten_1989_crop.jpg",
      "author": "Anefo / Nationaal Archief, collection 2.24.01.05, item 934-4427",
      "license": "CC0 1.0",
      "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
      "extended": true,
      "photoNote": "Source image displayed with a CSS crop; source license retained. Archive portrait, not a claim of current club membership."
    },
    {
      "id": "didier-drogba",
      "name": "Didier Drogba",
      "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Didier_Drogba_(2019)_(cropped).jpg?width=500",
      "caption": "Didier Drogba — sourced archive photograph; photo date differs from record season",
      "position": "center 20%",
      "accent": "#95aac8",
      "club": "Chelsea",
      "nationality": "Côte d’Ivoire",
      "role": "Forward",
      "decades": [
        "2000s",
        "2010s"
      ],
      "tag": "European legends",
      "label": "The big-game finisher",
      "goals": null,
      "metricValue": 1,
      "metricLabel": "Goal in the 2012 final",
      "metricScope": "2012 Champions League final, normal/extra time. Shoot-out kicks are not match goals.",
      "stats": [
        {
          "label": "Goal in the 2012 final",
          "value": 1,
          "scope": "2012 Champions League final, normal/extra time. Shoot-out kicks are not match goals.",
          "source": "https://www.uefa.com/uefachampionsleague/news/0261-107d82d75d76-8f0e9280f586-1000--how-brilliant-was-didier-drogba/"
        }
      ],
      "milestone": "The decisive penalty",
      "period": "2011/12",
      "story": "His late header brought Chelsea level in Munich; his shoot-out kick then sealed their first title.",
      "fact": "The equaliser arrived in the 88th minute. The winning shoot-out penalty is recorded separately from his match goal.",
      "factSource": "https://www.uefa.com/uefachampionsleague/news/0261-107d82d75d76-8f0e9280f586-1000--how-brilliant-was-didier-drogba/",
      "goalSource": "https://www.uefa.com/uefachampionsleague/news/0261-107d82d75d76-8f0e9280f586-1000--how-brilliant-was-didier-drogba/",
      "source": "https://commons.wikimedia.org/wiki/File:Didier_Drogba_(2019)_(cropped).jpg",
      "author": "Y.Leclercq",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "extended": true,
      "photoNote": "Source image displayed with a CSS crop; source license retained. Archive portrait, not a claim of current club membership."
    },
    {
      "id": "ronaldinho",
      "name": "Ronaldinho",
      "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Ronaldinho_in_2019.jpg?width=500",
      "caption": "Ronaldinho — sourced archive photograph; photo date differs from record season",
      "position": "center 20%",
      "accent": "#95aac8",
      "club": "Barcelona",
      "nationality": "Brazil",
      "role": "Forward",
      "decades": [
        "2000s"
      ],
      "tag": "European legends",
      "label": "The creative spark",
      "goals": null,
      "metricValue": 7,
      "metricLabel": "Goals in 2005/06",
      "metricScope": "2005/06 Champions League campaign only; not a career total.",
      "stats": [
        {
          "label": "Goals in 2005/06",
          "value": 7,
          "scope": "2005/06 Champions League campaign only; not a career total.",
          "source": "https://www.uefa.com/uefasupercup/news/0250-0c50f26c3502-36be8b4fcb18-1000--most-valuable-player/"
        }
      ],
      "milestone": "European champion",
      "period": "2005/06",
      "story": "Seven goals helped Barcelona reach the Paris final and reclaim the European crown.",
      "fact": "He appeared in 12 of Barcelona’s 13 matches during that Champions League-winning campaign.",
      "factSource": "https://www.uefa.com/uefasupercup/news/0250-0c50f26c3502-36be8b4fcb18-1000--most-valuable-player/",
      "goalSource": "https://www.uefa.com/uefasupercup/news/0250-0c50f26c3502-36be8b4fcb18-1000--most-valuable-player/",
      "source": "https://commons.wikimedia.org/wiki/File:Ronaldinho_in_2019.jpg",
      "author": "Marcos Corrêa / PR",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
      "extended": true,
      "photoNote": "Source image displayed with a CSS crop; source license retained. Archive portrait, not a claim of current club membership."
    },
    {
      "id": "kaka",
      "name": "Kaká",
      "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kaka_(2).jpg?width=500",
      "caption": "Kaká — sourced archive photograph; photo date differs from record season",
      "position": "center 20%",
      "accent": "#95aac8",
      "club": "AC Milan",
      "nationality": "Brazil",
      "role": "Midfielder",
      "decades": [
        "2000s",
        "2010s"
      ],
      "tag": "European legends",
      "label": "The Milan playmaker",
      "goals": null,
      "metricValue": 10,
      "metricLabel": "Goals in 2006/07",
      "metricScope": "2006/07 Champions League campaign only; competition-leading total.",
      "stats": [
        {
          "label": "Goals in 2006/07",
          "value": 10,
          "scope": "2006/07 Champions League campaign only; competition-leading total.",
          "source": "https://www.uefa.com/news-media/news/0250-0c50f2621f57-658fc57a2a14-1000--kaka-collects-world-crown/"
        }
      ],
      "milestone": "Top scorer & champion",
      "period": "2006/07",
      "story": "Milan’s creator and leading scorer finished a victorious European campaign with ten goals.",
      "fact": "His 2007 Champions League triumph was followed by the Ballon d’Or and FIFA World Player of the Year awards.",
      "factSource": "https://www.uefa.com/news-media/news/0250-0c50f2621f57-658fc57a2a14-1000--kaka-collects-world-crown/",
      "goalSource": "https://www.uefa.com/news-media/news/0250-0c50f2621f57-658fc57a2a14-1000--kaka-collects-world-crown/",
      "source": "https://commons.wikimedia.org/wiki/File:Kaka_(2).jpg",
      "author": "Ja Fryta",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0/",
      "extended": true,
      "photoNote": "Source image displayed with a CSS crop; source license retained. Archive portrait, not a claim of current club membership."
    }
  ]
};
if(typeof module!=="undefined")module.exports=DECADE_DATA;
