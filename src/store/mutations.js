const mutations = {
    DATA_SAVE_CLASSIFY(state, chartColumn){
        state.chartColumnClassify = chartColumn
    },
    DATA_SAVE_VISUAL(state, chartSelect){
        state.chartColumnVisualize = chartSelect 
    },
    ARRAY_COLUMN(state, columnData){
        state.columnData = columnData
    },
    RESPONSE_MODEL(state, responseModel){
        state.responseModel = responseModel
    }
};
export default mutations;
