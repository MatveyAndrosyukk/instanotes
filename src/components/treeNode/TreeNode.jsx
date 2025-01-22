import opened_file from "../../images/opened_file.svg"
import closed_file from "../../images/closed_file.svg"
import file_image from "../../images/file_image.svg"
import three_points from "../../images/three_points.svg"
import line_default from "../../images/file_line_default.svg"
import first_level_child_line from "../../images/file_line.svg"
import last_child_line from "../../images/file_line_last.png"
import { useEffect, useState } from "react"
import "../../styles/TreeNode.css"

function TreeNode ({item}) {
    const [element, setElement] = useState(item)

    useEffect(() => {
        //get all children of root foalder to make 1 line for all children;
        let elementAllChildren = getChildrenOfElement(element);
        
        //for every child start to render line;
        for(let i = 0; i < elementAllChildren.length; i++){
            //creating default line;
            const defaultLine = document.createElement("img")
            defaultLine.src=line_default
            defaultLine.alt="Line "+ element.id
            defaultLine.className="childLine"
            //creating first child line;
            const firstLevelChildLine = document.createElement("img")
            firstLevelChildLine.src=first_level_child_line
            firstLevelChildLine.alt="Line "+ element.id
            firstLevelChildLine.className="childLine"
            //creating first child line;
            const lastChildLine = document.createElement("img")
            lastChildLine.src=last_child_line
            lastChildLine.alt="Line "+ element.id
            lastChildLine.className="childLine"
            if(elementAllChildren[i].level - element.level === 1){
                defaultLine.style.left = (((elementAllChildren[i].level-element.level)*-19)) + "px" 
            }else{
                defaultLine.style.left = (((elementAllChildren[i].level-element.level)*-19) + ((elementAllChildren[i].level-element.level-1)*-3)) + "px" 
            }
            document.getElementById(elementAllChildren[i].id)?.appendChild(defaultLine)
        }
    }, [])

    const onClickHandler = (e) => {
        if (document.getElementById(item.id + "ch").style.display === "block"){
          document.getElementById(item.id + "ch").style.display = "none"
          setElement({...element, opened: false})
        } else{
          document.getElementById(item.id + "ch").style.display = "block"
          setElement({...element, opened: true})
        }
      }
    
    function getChildrenOfElement(root) {
        const targetElement = root;
        
        if (!targetElement) {
          return [];
        }
      
        const result = [];
      
        function recursiveFlatten(item) {
          result.push(item);
          if (item.children) {
            item.children.forEach(recursiveFlatten);
          }
        }
      
        recursiveFlatten(targetElement);
      
        result.shift();
      
        return result;
    }

    return (
        <div id={element.id + "tr"} className="treeNode">
            <div id={element.id} className="treeNodeWrapper" onClick={(e) => onClickHandler(e)}>
                <div className="treeNodeLeftSide">
                    {element.type === "FOALDER" &&
                        <div className={element.opened ? "treeNodeOpened" : "treeNodeClosed"}>
                            <img src={element.opened ? opened_file : closed_file} alt={element.opened ? "svg_opened_file" : "svg_closed_file"}/>
                        </div>
                    }
                    {element.type === "FILE"
                    &&
                    <div className="treeNodeFIleImage">
                        <img src={file_image} alt="svg_file_image"/>
                    </div>
                    }
                    <div className="treeNodeName">
                        {element.title}
                    </div>
                </div>
                <div className="treeNodeCloseTextBlock">
                    
                </div>
                <div className="treeNodeEdit">
                    <img src={three_points} alt="svg_edit_file"/>
                </div>
            </div>
            {element.children &&
                <div id={element.id +"ch"} className="nextTreeNode">
                    {element.children?.map((x) => (
                        <TreeNode key={x.id} item={x}/>
                    ))}
                </div>
            }
        </div>
    );
}

export default TreeNode;