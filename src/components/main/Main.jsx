import plus from "../../images/plus.svg"
import "../../styles/Main.css"
import TreeNode from "../treeNode/TreeNode";
import files from "../../files";

function Main() {
    return (
        <div className="main">
            <div className="container main_container">
                 <div className="file_tree">
                    <div className="file_tree_header">
                        <div className="file_tree_add_button">
                            <div className="main_button">
                                <img src={plus} alt="svg_plus_button"></img>
                            </div>
                        </div>
                        <div className="file_tree_text">
                            Make your work easier
                        </div>
                    </div>
                    <div>
                        {files.map((root) => (
                            <TreeNode key={root.id} item={root}/>
                        ))}
                    </div>
                    <div className="main_button download_button">
                        Download file tree
                    </div>
                </div>
                <div className="opened_file">

                </div>
            </div>
        </div>
    )
}

export default Main;