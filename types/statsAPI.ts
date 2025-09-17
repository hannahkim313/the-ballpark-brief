export type ScheduleResponse = {
  dates: {
    date: string;
    games: {
      gamePk: number;
      teams: {
        away: {
          team: {
            name: string;
          };
        };
        home: {
          team: {
            name: string;
          };
        };
      };
    }[];
  }[];
};

export type GameResponse = {
  gameData: {
    datetime: {
      ampm: string;
      officialDate: string;
      time: string;
    };
    gameInfo: {
      attendance?: number;
      firstPitch?: string;
      gameDurationMinutes?: number;
    };
    probablePitchers: {
      away?: {
        id?: number;
      };
      home?: {
        id?: number;
      };
    };
    teams: {
      away: {
        abbreviation: string;
        clubName: string;
        name: string;
        record: {
          leagueRecord: {
            losses: number;
            wins: number;
          };
        };
      };
      home: {
        abbreviation: string;
        clubName: string;
        name: string;
        record: {
          leagueRecord: {
            losses: number;
            wins: number;
          };
        };
      };
    };
    status: {
      abstractGameState: string;
    };
    venue: {
      location: {
        city: string;
        stateAbbrev: string;
      };
      name: string;
      timeZone: {
        id: string;
        tz: string;
      };
    };
    weather: {
      condition?: string;
      temp?: string;
      wind?: string;
    };
  };
  liveData: {
    boxscore: {
      officials: {
        official?: {
          fullName?: string;
        };
        officialType?: string;
      }[];
      teams: {
        away: {
          battingOrder: number[];
          players: {
            [key: string]: {
              allPositions?: {
                abbreviation: string;
                name: string;
              }[];
              battingOrder: string;
              jerseyNumber: string;
              person: {
                fullName: string;
                id: number;
                link: string;
              };
              position: {
                abbreviation: string;
                name: string;
                type: string;
              };
              stats: {
                batting: {
                  atBats?: number;
                  baseOnBalls?: number;
                  hits?: number;
                  rbi?: number;
                  runs?: number;
                  strikeOuts?: number;
                };
              };
            };
          };
        };
        home: {
          battingOrder: number[];
          players: {
            [key: string]: {
              allPositions?: {
                abbreviation: string;
                name: string;
              }[];
              battingOrder: string;
              jerseyNumber: string;
              person: {
                fullName: string;
                id: number;
                link: string;
              };
              position: {
                abbreviation: string;
                name: string;
                type: string;
              };
              stats: {
                batting: {
                  atBats?: number;
                  baseOnBalls?: number;
                  hits?: number;
                  rbi?: number;
                  runs?: number;
                  strikeOuts?: number;
                };
              };
            };
          };
        };
      };
    };
    linescore: {
      currentInningOrdinal: string;
      innings: {
        away: {
          errors: number;
          hits: number;
          leftOnBase: number;
          runs: number;
        };
        home: {
          errors: number;
          hits: number;
          leftOnBase: number;
          runs: number;
        };
        num: number;
        ordinalNum: string;
      }[];
      teams: {
        away: {
          errors?: number;
          hits?: number;
          leftOnBase?: number;
          runs?: number;
        };
        home: {
          errors?: number;
          hits?: number;
          leftOnBase?: number;
          runs?: number;
        };
      };
    };
  };
};

export type Batter =
  GameResponse['liveData']['boxscore']['teams']['away']['players'][string];

export type PitcherResponse = {
  people: {
    fullName: string;
    primaryNumber: string;
    pitchHand: {
      code: string;
    };
    stats: {
      splits: {
        stat: {
          era: string;
          losses: number;
          strikeOuts: number;
          wins: number;
        };
      }[];
    }[];
  }[];
};
