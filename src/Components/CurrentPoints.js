import React from "react";

class CurrentPoints extends React.Component {

    render() {
        const container = {
            width: "100%",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            paddingRight: "20px",
        }

        const text = {
            fontSize: "20px",
            padding: "10px",
        }

        const points = {
            fontSize: "40px",
            display: "flex",
            backgroundColor: "orange",
            border: "1px solid orange",
            width: "80px",
            height: "80px",
            borderRadius: "100% 100% 100% 100%",
            alignItems: "center",
            justifyContent: "center",
        }

        return (
            <div style={container} >
                <div style={text}>Aktuelle Coins</div>
                <div style={points}>{this.props.points}</div>
            </div>
        )
    }
}
export default CurrentPoints;