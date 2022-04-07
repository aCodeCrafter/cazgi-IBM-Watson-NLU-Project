import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {
        //Returns the emotions as an HTML table
        return (
            <div>
                <table className="table table-bordered">
                    <tbody>
                        {
                            /*Write code to use the .map method that you worked on in the 
                            Hands-on React lab to extract the emotions. If you are stuck,
                            please click the instructions to see how to implement a map*/
                            Object.entries(this.props.emotions).map(
                                (emotion_entries) => {
                                    return (
                                        <tr>
                                            <td>{emotion_entries[0]}</td>
                                            <td>{emotion_entries[1]}</td>
                                        </tr>
                                    )
                                }
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }

}
export default EmotionTable;