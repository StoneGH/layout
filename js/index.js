$(function() {
	initialDraggable();
});

/**
 * 初始化拖动组件
 * <p>
 * 2016-05-18 Stone+
 * </p>
 */
function initialDraggable() {
	$(".layout").draggable({
		appendTo : "body",
		helper : 'clone'
	});
	$('#dropzone')
			.droppable(
					{
						activeClass : 'active',
						hoverClass : 'hover',
						accept : ":not(.ui-sortable-helper)", // Reject clones
						// generated by
						// sortable
						drop : function(e, ui) {
							var layout = ui.draggable.attr("layout");
							var html = '';
							if (layout == "1") {
								html += '<div class="col-xs-12 col-sm-12 losort" onmousemove="losortMouseOver(this)" onmouseout="losortMouseOut(this)">';
								html += '<div class="col-xs-12 col-sm-12">';
								html += '<span href="#" class="thumbnail">';
								html += '<img width="749" height="240" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNzQ5IiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDc0OSAyNDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzEwMCV4MTgwCkNyZWF0ZWQgd2l0aCBIb2xkZXIuanMgMi42LjAuCkxlYXJuIG1vcmUgYXQgaHR0cDovL2hvbGRlcmpzLmNvbQooYykgMjAxMi0yMDE1IEl2YW4gTWFsb3BpbnNreSAtIGh0dHA6Ly9pbXNreS5jbwotLT48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWyNob2xkZXJfMTU0NjA5YmFkZTIgdGV4dCB7IGZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZTozN3B0IH0gXV0+PC9zdHlsZT48L2RlZnM+PGcgaWQ9ImhvbGRlcl8xNTQ2MDliYWRlMiI+PHJlY3Qgd2lkdGg9Ijc0OSIgaGVpZ2h0PSIyNDAiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIyNzguNDg0Mzc1IiB5PSIxMzYuNSI+NzQ5eDI0MDwvdGV4dD48L2c+PC9nPjwvc3ZnPg==">';
								html += '</span>';
								html += '</div>';
								html += '<div class="opbar"><span class="glyphicon glyphicon-edit" onclick="layoutEdit(this)"></span><span class="glyphicon glyphicon-trash" onclick="layoutDel(this)"></span></div>';
								html += '</div>';
							} else if (layout == "2") {
								html += '<div class="col-xs-12 col-sm-12 losort" onmousemove="losortMouseOver(this)" onmouseout="losortMouseOut(this)">';
								html += '<div class="col-xs-6 col-sm-6">';
								html += '<span href="#" class="thumbnail">';
								html += '<img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMzA4IiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDMwOCAxNTAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzEwMCV4MTgwCkNyZWF0ZWQgd2l0aCBIb2xkZXIuanMgMi42LjAuCkxlYXJuIG1vcmUgYXQgaHR0cDovL2hvbGRlcmpzLmNvbQooYykgMjAxMi0yMDE1IEl2YW4gTWFsb3BpbnNreSAtIGh0dHA6Ly9pbXNreS5jbwotLT48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWyNob2xkZXJfMTU0NjExMTEyMGIgdGV4dCB7IGZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxNXB0IH0gXV0+PC9zdHlsZT48L2RlZnM+PGcgaWQ9ImhvbGRlcl8xNTQ2MTExMTIwYiI+PHJlY3Qgd2lkdGg9IjMwOCIgaGVpZ2h0PSIxNTAiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxMTUuMDcwMzEyNSIgeT0iODEuNiI+MzA4eDE1MDwvdGV4dD48L2c+PC9nPjwvc3ZnPg==">';
								html += '</span>';
								html += '</div>';
								html += '<div class="col-xs-6 col-sm-6">';
								html += '<span href="#" class="thumbnail">';
								html += '<img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMzA4IiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDMwOCAxNTAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzEwMCV4MTgwCkNyZWF0ZWQgd2l0aCBIb2xkZXIuanMgMi42LjAuCkxlYXJuIG1vcmUgYXQgaHR0cDovL2hvbGRlcmpzLmNvbQooYykgMjAxMi0yMDE1IEl2YW4gTWFsb3BpbnNreSAtIGh0dHA6Ly9pbXNreS5jbwotLT48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWyNob2xkZXJfMTU0NjExMTEyMGIgdGV4dCB7IGZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxNXB0IH0gXV0+PC9zdHlsZT48L2RlZnM+PGcgaWQ9ImhvbGRlcl8xNTQ2MTExMTIwYiI+PHJlY3Qgd2lkdGg9IjMwOCIgaGVpZ2h0PSIxNTAiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxMTUuMDcwMzEyNSIgeT0iODEuNiI+MzA4eDE1MDwvdGV4dD48L2c+PC9nPjwvc3ZnPg==">';
								html += '</span>';
								html += '</div>';
								html += '<div class="opbar"><span class="glyphicon glyphicon-edit" onclick="layoutEdit(this)"></span><span class="glyphicon glyphicon-trash" onclick="layoutDel(this)"></span></div>';
								html += '</div>';
							} else if (layout == "3") {
								html += '<div class="col-xs-12 col-sm-12 losort" onmousemove="losortMouseOver(this)" onmouseout="losortMouseOut(this)">';
								html += '<div class="col-xs-8 col-sm-8">';
								html += '<span href="#" class="thumbnail">';
								html += '<img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNTMyIiBoZWlnaHQ9IjMxOSIgdmlld0JveD0iMCAwIDUzMiAzMTkiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzEwMCV4MTgwCkNyZWF0ZWQgd2l0aCBIb2xkZXIuanMgMi42LjAuCkxlYXJuIG1vcmUgYXQgaHR0cDovL2hvbGRlcmpzLmNvbQooYykgMjAxMi0yMDE1IEl2YW4gTWFsb3BpbnNreSAtIGh0dHA6Ly9pbXNreS5jbwotLT48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWyNob2xkZXJfMTU0NjBmZDM1Y2IgdGV4dCB7IGZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToyN3B0IH0gXV0+PC9zdHlsZT48L2RlZnM+PGcgaWQ9ImhvbGRlcl8xNTQ2MGZkMzVjYiI+PHJlY3Qgd2lkdGg9IjUzMiIgaGVpZ2h0PSIzMTkiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxOTUuOTI5Njg3NSIgeT0iMTcxLjgiPjUzMngzMTk8L3RleHQ+PC9nPjwvZz48L3N2Zz4=">';
								html += '</span>';
								html += '</div>';
								html += '<div class="col-xs-4 col-sm-4">';
								html += '<span href="#" class="thumbnail">';
								html += '<img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjY2IiBoZWlnaHQ9IjMxOSIgdmlld0JveD0iMCAwIDI2NiAzMTkiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzEwMCV4MTgwCkNyZWF0ZWQgd2l0aCBIb2xkZXIuanMgMi42LjAuCkxlYXJuIG1vcmUgYXQgaHR0cDovL2hvbGRlcmpzLmNvbQooYykgMjAxMi0yMDE1IEl2YW4gTWFsb3BpbnNreSAtIGh0dHA6Ly9pbXNreS5jbwotLT48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWyNob2xkZXJfMTU0NjBmZTk2YmYgdGV4dCB7IGZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxNnB0IH0gXV0+PC9zdHlsZT48L2RlZnM+PGcgaWQ9ImhvbGRlcl8xNTQ2MGZlOTZiZiI+PHJlY3Qgd2lkdGg9IjI2NiIgaGVpZ2h0PSIzMTkiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSI5MS40ODQzNzUiIHk9IjE2Ni43Ij4yNjZ4MzE5PC90ZXh0PjwvZz48L2c+PC9zdmc+">';
								html += '</span>';
								html += '</div>';
								html += '<div class="opbar"><span class="glyphicon glyphicon-edit" onclick="layoutEdit(this)"></span><span class="glyphicon glyphicon-trash" onclick="layoutDel(this)"></span></div>';
								html += '</div>';
							}
							$(this).append(html);
						}
					}).sortable({
				items : '.losort',
				sort : function() {
					// gets added unintentionally by droppable interacting with
					// sortable
					// using connectWithSortable fixes this, but doesn't allow
					// you
					// to customize active/hoverClass options
					$(this).removeClass("active");
				}
			});
}

function losortMouseOver(dom) {
	$(dom).find(".opbar").show();
}
function losortMouseOut(dom) {
	$(dom).find('.opbar').hide();
}

function layoutEdit(dom) {
	var imgs = $(dom).parent().parent().find('img');
	var html = '';
	$(imgs)
			.each(
					function() {
						html += '<div class="col-sm-6">';
						html += $(this)[0].outerHTML;
						html += '<input type="text" class="form-control" placeholder="http://">';
						html += '</div>';
					});
	$("#modalEditBody").html(html);
	$("#modalEdit").modal('show');
	$("#modalEditBody img").bind('click', function() {
		var $img = $(this);
		$('#file').click();
		$("#file").change(function() {
			var $file = $(this);
			var fileObj = $file[0];
			var windowUrl = window.URL || window.webkitURL;
			if (fileObj && fileObj.files && fileObj.files[0]) {
				dataUrl = windowUrl.createObjectURL(fileObj.files[0]);
			} else {
				dataURL = $file.val();
			}
			$img.src = dataURL;
		});
	});
}
function layoutDel(dom) {
	$(dom).parent().parent().remove();
}

var dataURL;
$(function() {

});