const mutations = {
    DATA_SAVE_CLASSIFY(state, chartColumn){
        state.chartColumnClassify = chartColumn
    },
    DATA_SAVE_VISUAL(state, chartSelect){
        state.chartColumnVisualize = chartSelect 
    }
};
export default mutations;
