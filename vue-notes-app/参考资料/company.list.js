(function() {
	new Vue({
		mixins : [ DHC, DHC_DATA_TABLE,COM_LIST_JS],
		// 扩展选项
		data : function() {
			return {
				url : "/company/list/data",
			}
		},

	});

})();
