import { Button, FormGroup, Intent, TextArea } from "@blueprintjs/core";
import { DateInput, TimePrecision } from '@blueprintjs/datetime';
import { handleStringChange } from "@blueprintjs/docs-theme";
import * as React from "react";
import { Link } from 'react-router-dom';
import { v4 as uuid } from "uuid";
import { BetModel } from '../models/BetModel';
import "./Submit.css";
import PageHeader from '../header/PageHeader';
import { API } from "aws-amplify";


export const header = {
  "Content-Type": "application/json",
  "Accept": "application/json"
};

export interface ISubmitState {
  textContent: string;
  date: Date
  url: string;
}

class Submit extends React.Component<{}, ISubmitState> {

  public state: ISubmitState = {
    textContent: "",
    date: new Date(),
    url: ""
  };

  private onInputChange = handleStringChange((textContent: string) =>
    this.setState({ textContent })
  );

  public render() {
    return (
      <div>
        <PageHeader signedIn={false} />
        <div className="Submit">
          <FormGroup
            helperText="e.g. I BET you will get married with Jane"
            label="I BET..."
            labelFor="bet-input"
          >
            <TextArea
              id="bet-input"
              fill={true}
              onChange={this.onInputChange}
              placeholder="Type..."
              value={this.state.textContent}
            />
          </FormGroup>
          <FormGroup
            helperText="e.g. by 14 Aug 2020"
            label="BY..."
            labelFor="date-input"
          >
            <DateInput
              formatDate={this.handleFormatDate}
              onChange={this.handleDateChange}
              parseDate={this.handleParseDate}
              placeholder={"M/D/YYYY"}
              value={this.state.date}
              timePrecision={TimePrecision.MINUTE}
              timePickerProps={{ useAmPm: true }}
              maxDate={new Date("12/31/2030")}
              minDate={new Date()}
            />
          </FormGroup>
          <Button
            className="subitButton"
            intent={Intent.SUCCESS}
            text="submit"
            onClick={this.onSubmit}
          />

          {this.state.url ? (
            <div>
              <Link to={`bet/${this.state.url}`} > Share Your Bet! </Link>
            </div>
          ) : null}

        </div >
      </div>
    );
  }

  private handleDateChange = (date: Date) => this.setState({ date });
  private handleFormatDate = (date: Date) => date.toLocaleString();
  private handleParseDate = (str: string) => new Date(str)

  private onSubmit = () => {
    const newBet: BetModel = new BetModel(uuid(), "author", this.state.textContent, this.state.date);
    // fetch("http://localhost:3001/submit", {
    //   body: JSON.stringify(newBet),
    //   headers: header,
    //   method: "POST"
    // })
    // .then((res: Response) => res.json())
    // .then(body => {
    //   console.log(body);
    //   this.setState({ url: body.id });
    // })
    this.post(newBet)
      .then((res) => {
        console.log(res);
        this.setState({ url: newBet.id });
      })
  };

  post = async (bet: BetModel) => {
    console.log('calling api');
    const response = await API.post('eugicapBet', '/bet', bet);
    alert(JSON.stringify(response, null, 2));
  };
}

export default Submit;
