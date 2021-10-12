import React from "react";
import { getSubAccsByMainAcc, getUser_Rewards, getUser_Tasks } from "../../Utils/CallMaster";

/**
 * SubAccDataSelector needs two properties
 * 1. 'dataType' -> select one ("user_rewards", "user_tasks")
 * 2. getData(data) -> function which uses the fetched data
 */

class SubAccDataSelector extends React.Component {

    state = {
        subAccounts: [],
    }

    componentDidMount() {
        this.fetchChildren()
    }

    fetchChildren = () => {
        getSubAccsByMainAcc(this.props.user.id)
            .then((res) => {
                console.log("SUBACCOUNTS", res);
                this.setState({
                    subAccounts: res.data
                })
            })
            .catch((err) => {
                console.log("Could not get children by mainAccount ", err)
            })
    }

    fetchData = (e) => {
        const dataType = this.props.dataType;
        const subAccId = e.target.name;
        if (dataType === "user_rewards") {
            getUser_Rewards(subAccId)
                .then((res) => {
                    this.props.getData(res.data);
                })
                .catch((err) => {
                    console.log("Could not get user_rewards by subAccountId ", err)
                })
        } else if (dataType === "user_tasks") {
            getUser_Tasks(subAccId)
                .then((res) => {
                    this.props.getData(res.data);
                })
                .catch((err) => {
                    console.log("Could not get user_tasks by subAccountId ", err)
                })
        } else {
            console.log(dataType, " Provided dataType ist not given or invalid.")
        }
    }


    render() {

        return (
            <div>
                {
                    this.state.subAccounts.map((subAccount) => (
                        <input
                            type="button"
                            name={subAccount.id}
                            value={subAccount.name}
                            key={subAccount.id}
                            onClick={(e) => this.fetchData(e)}
                        />
                    ))
                }
            </div>
        )
    }
}
export default SubAccDataSelector;