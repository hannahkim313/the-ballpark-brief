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
      dateTime: string;
      time: string;
    };
    gameInfo: {
      attendance: number;
      firstPitch: string;
      gameDurationMinutes: number;
    };
    teams: {
      away: {
        name: string;
        record: {
          leagueRecord: {
            losses: number;
            wins: number;
          };
        };
      };
      home: {
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
        tz: string;
      };
    };
    weather: {
      condition: string;
      temp: string;
      wind: string;
    };
  };
  liveData: {
    boxscore: {
      officials: {
        official: {
          fullName: string;
        };
        officialType: string;
      }[];
    };
  };
};
