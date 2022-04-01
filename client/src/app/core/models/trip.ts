export interface Trip {
  id: number;
  startDate: string,
  endDate: string,
  destination: string,
  departure: string,
  state: string,
  checkpoints? : [
    {
      id : number,
      attributes :{
        order : number,
        location : {
          data : {
            attributes : {
              lat : number,
              lon : number,
              state : string
            }
          }
        }
        state : {
          data : {
            attributes : {
              name : string
            }
          }
        }
      }
    }
  ]
}
