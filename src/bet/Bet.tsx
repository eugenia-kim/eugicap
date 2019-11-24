import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { BetModel } from '../models/BetModel';
import Countdown from 'react-countdown-now';
import './Bet.css'
import Amplify, { Analytics, Storage, API } from 'aws-amplify';

export const header = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Access-Control-Allow-Origin": '*'
};

interface IBetState {
    id: string;
    bet?: BetModel;
}

class Bet extends React.Component<{} & RouteComponentProps, IBetState> {

    public state: IBetState = {
        id: "",
    };

    public componentDidMount = () => {
        const params: any = this.props.match.params;
        console.log(params);
        this.setState({ id: params.id });
        this.retrieveBet(params.id);
    }

    public render() {
        if (this.state.bet) {
            return (
                <div className="gn-body">
                    <Countdown
                        date={this.state.bet.date}
                        renderer={this.renderCountdown}
                    />
                </div>
            );
        }
        return <div />
    }

    private renderCountdown = ({ days, hours, minutes, seconds, completed }: { days: number, hours: number, minutes: number, seconds: number, completed: boolean }): React.ReactNode => {
        return (
            completed && this.state.bet
                ? (
                    <div className="gn-countdown">
                        <div className="gn-row">
                            <div className="gn-name">
                                {this.state.bet.author}
                            </div>
                            <div className="gn-txt">
                                has bet:
                        </div>
                        </div>
                        <div className="gn-row">
                            <div className="gn-bet">
                                {this.state.bet.bet}
                            </div>
                        </div>
                    </div>
                )
                : (
                    <div className="gn-countdown">
                        {days} days {hours}:{minutes}:{seconds}
                    </div>
                )
        );
    }

    private retrieveBet(id: string) {
        // fetch(`http://localhost:3001/bet/${id}`, {
        //     headers: header,
        //     method: "GET"
        // })
        //     .then((res: Response) => res.json())
        //     .then(body => {
        //         console.log(body);
        //         this.setState({ bet: new BetModel(body.id, body.author, body.bet, body.date) });
        //     })
        API.get('apiBet', `/bet/${id}`, null)
            .then((res) => {
                console.log(res);
                const bet: BetModel = res[0];
                this.setState({ bet: new BetModel(bet.id, bet.author, bet.bet, bet.date) });
            })
    };
}

export default Bet;
