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
