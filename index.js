

function getName(node){
    return node['name']
}

function headNode(head, list){
    for(const key in list){
        if(key===head){
            return list[key]
        }
    }
}

function next(head, list){
    let index=head['next']
    return list[index]
}

function nodeAt(index, first, list){
    let newIndex=list[first]["next"]
    let value = list[first]
    if(index===0){
        return headNode(first,list)
    }
    for(let i=1; i<index; i++){
        value=next(value,list)
        newIndex=value["next"]
    }
    return  list[newIndex]
}

function addressAt(index, first, list){
    if(index===0){
        return first
    }else{
    return nodeAt(index-1, first,list)['next']
    }
}

function indexAt(node,list,first){
    let counter=0;
    let index=list[first]['next']
    for(const x in list){
        if(node['next']===index){
            return counter
        }
        else{
            index=list[index]['next']
            counter++
        }
    }
}

function insertNodeAt(index, name, first, list){
    let newNode=list[first]
    let previousNode;
    for(let i=0; i<=index; i++){
        if(index===i){
            list[name]['next']=previousNode["next"]
            previousNode['next']=name
        }else{
        previousNode=newNode
        newNode=list[newNode]
    }

}

}

function deleteNodeAt(index,first,list){
    let node=nodeAt(index-1,first,list)
    node['next']=addressAt(index+1,first,list)
}
