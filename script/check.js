let visitedVertex = [];
let visitedEdge = [];
let cycleGroup = [];
let cycleCnt = 0;

function concatGroup(edge){
    let s = cycleGroup[checkGroup(edge.s)];
    let e = cycleGroup[checkGroup(edge.e)];

    cycleGroup[checkGroup(edge.s)] = s.concat(e);
}

function checkGroup(v){
    for(let g = 0; g < cycleGroup.length; g++){
        for(let i = 0; i < cycleGroup[g].length; i++){
            if(cycleGroup[g][i] == v) return g;
        }
    }
}

function checkCycle(edge){
    for(let g = 0; g < cycleGroup.length; g++){
        let tmp = false;
        for(let i = 0; i < cycleGroup[g].length; i++){
            if(cycleGroup[g][i] == edge.s){
                if(tmp == false) tmp = true;
                else return false;
            }
            if(cycleGroup[g][i] == edge.e){
                if(tmp == false) tmp = true;
                else return false;
            }
        }
    }
    return true;
}

function checkVertex(v) {
    for(let i = 0; i < visitedVertex.length; i++){
        if(visitedVertex[i] == v) return false;
    }
    return true;
}

function checkEdge(edge){
    for(let i = 0; i < visitedEdge.length; i++){
        if(visitedEdge[i].s == edge.s && visitedEdge[i].e == edge.e)
            return i;
    }
    return true;
}
