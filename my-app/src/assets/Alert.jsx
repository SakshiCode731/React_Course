import React from "react";

function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{height:'50px'}}>
        { props.alert && <div className="bg-green-100 border border-green-400 text-green-800 px-4 py-3 rounded-lg flex items-center justify-between" role="alert">
            <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}
            <button
                type="button"
                className="text-green-800 font-bold text-xl hover:text-green-900"
            >
                {/* &times; */}
            </button>
        </div>
        }
        </div>
    );
}
export default Alert;