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
          players: {
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
          };
        };
        home: {
          players: {
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
          };
        };
      };
    };
  };
};

// TODO: shape data for individual pitcher response
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

// TODO: shape data for individual hitter response
export type BatterResponse = {};
