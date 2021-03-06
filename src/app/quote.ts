export class Quote {
  reset() {
    throw new Error('Method not implemented.');
  }
  moreDetails: boolean;
  constructor(
    public quote: string,
    public author: string,
    public submittedBy: string,
    public date:Date
  ) {
    this.moreDetails = false;
  }
  voteUp: number = 0;
  voteDown: number = 0;
}
