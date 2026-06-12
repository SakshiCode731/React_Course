import React from "react";

function Alert(props) {
    return (
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 px-4 py-3 rounded-lg flex items-center justify-between" role="alert">
            {props.alert}
            <button
                type="button"
                className="text-yellow-800 font-bold text-xl hover:text-yellow-900"
            >
                {/* &times; */}
            </button>
        </div>
    );
}
export default Alert;