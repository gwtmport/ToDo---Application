import React from "react";
import "./App.css";
import deleteIcon from '../assets/delete.svg';
import plusIcon from '../assets/plus.svg';
import tickIcon from "../assets/tick-green.svg";
import revertIcon from "../assets/revert.svg"


class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { id: 0, title: "Buy 1Kg Tomato", completed: false, order: 1 },
                { id: 1, title: "Buy 2Kg Onion", completed: false, order: 2 },
                { id: 2, title: "Visit Freind", completed: false, order: 3 },
                { id: 3, title: "Clean House", completed: false, order: 4 },
                { id: 4, title: "Washign Clothes", completed: false, order: 5 },
                { id: 5, title: "Play Cricket", completed: false, order: 6 },
                { id: 6, title: "1Km Walking", completed: false, order: 7 },
                { id: 7, title: "Do Homework", completed: false, order: 8 },
                { id: 8, title: "Do Homework", completed: false, order: 8 },

            ],
            input: "",
            itemCount: 8,
        }
    }

    removeItem = (id) => {
        let new_items = this.state.items.filter((item) => item.id !== id);
        this.setState({
            items: new_items,
        })
    };

    updateCompletedItem = (id) => {
        let updated_items = this.state.items.map(item => {
            if (item.id === id) {
                return { ...item, completed: !item.completed };
            }
            return item;
        });
        this.setState({ items: updated_items });
    };

    completedItems = () => {
        return this.state.items.map((item) => {
            if (item.completed) {
                return (
                    <li key={item.id}>

                        <div className="left">
                            <span className="round" >
                                <img src={tickIcon} alt="Completed" />
                            </span>
                            <div className="title">
                                {item.order},
                            </div>
                            {item.title}
                        </div>
                        <div className="right">
                            <span className="revert" onClick={() => this.updateCompletedItem(item.id)}>
                                <img src={revertIcon} alt="Undo" />
                            </span>
                            <span onClick={() => this.removeItem(item.id)}
                                className="delete"
                            >
                                <img className="delete" src={deleteIcon} alt="Delete" />
                            </span>
                        </div>
                    </li>
                );
            }
            return null;
        });
    }


    renderItems = () => {
        return this.state.items.map((item) => {
            if (!item.completed) {
                return (
                    <li key={item.id}>
                        <div className="left">
                            <span className="round" onClick={() => this.updateCompletedItem(item.id)}></span>
                            <div className="title">
                                <div className="list-order">
                                    {item.order},
                                </div>
                                {item.title}
                            </div>
                        </div>
                        <span onClick={() => this.removeItem(item.id)}
                            className="delete"
                        >
                            <img className="delete" src={deleteIcon} alt="Delete" />
                        </span>
                    </li>
                );
            }
            return null;
        });
    }

    updateItem = (e) => {
        e.preventDefault();
        let new_item = {
            id: this.state.items.length,
            title: this.state.input,
            completed: false, // Add completed property
            order: this.state.itemCount + 1,
        };
        if (this.state.input) {
            this.setState({
                items: [...this.state.items, new_item],
                input: "",
                itemCount: this.state.itemCount + 1,
            });
        }
    };




    render() {
        return (
            <div className="main">
                <h1>Todo List</h1>
                <section className="wrapper-x">
                    <h2>Things to be done</h2>
                </section>
                <section className="wrapper-y">
                    <ul>{this.renderItems()}</ul>
                </section>
                <form action="">
                    <span className="plus">
                        <img src={plusIcon} alt="Add" />
                    </span>
                    <input
                        type="text"
                        placeholder="Type new task..."
                        value={this.state.input}
                        onChange={(e) => this.setState({ input: e.target.value })}
                    />
                    <button onClick={(e) => this.updateItem(e)}>
                        Add New
                    </button>
                </form>
                <section className="wrapper-x">
                    <h2>Completed</h2>
                </section>
                <section className="wrapper-y">
                    <ul className="completed">{this.completedItems()}</ul>
                </section>
            </div>
        )
    }
}

export default ToDo;





