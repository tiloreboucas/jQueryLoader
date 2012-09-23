(function ($) {
    var attr = {
        target: '',
        imgLoader: '<img ' + 'src="data:image/gif;base64,R0lGODlhEAAQAPMPALu7u5mZmTMzM93d3REREQAAAHd3' +
                    'd1VVVWZmZqqqqoiIiO7u7kRERCIiIgARAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBwAPACwAAAAAE' +
                    'AAQAEAEcPDJtyg6dUrFetDTIopMoSyFcxxD1krD8AwCkASDIlPaUDQLR6G1Cy0SgqIkE1IQGMrFAKCcGWSBzw' +
                    'PAnAwarcKQ15MpTMJYd1ZyUDXSDGelBY0qIoBh/ZoYGgELCjoxCRRvIQcGD1kzgSAgAACQDxEAIfkEBQcADwAsAAA' +
                    'AAA8AEAAABF3wyfkMkotOJpscRKJJwtI4Q1MAoxQ0RFBw0xEvhGAVRZZJh4JgMAEQW7TWI4EwGFjKR+CAQECjn8DoN0kwDtv' +
                    'BT8FILAKJgfoo1iAGAPNVY9DGJXNMIHN/HJVqIxEAIfkEBQcADwAsAAAAABAADwAABFrwyfmColgiydpaQiY5x9' +
                    'Ith7hURdIl0wBIhpCAjKIIxaAUPQ0hFQsAC7MJALFSFi4SgC4wyHyuCYNWxH3AuhSEotkNGAALAPqqkigG8MWAj' +
                    'AnM4A8594vPUyIAIfkEBQcADwAsAAAAABAAEAAABF3wySkDvdKsddg+APYIWrcg2DIRQAcU6DJICjIsjBEETLEE' +
                    'BYLqYSDdJoCGiHgZwG4LQCCRECEIBAdoF5hdEIWwgBJqDs7DgcKyRHZl3uUwuhm2AbNNW+LV7yd+FxEAIfkEBQcA' +
                    'CAAsAAAAABAADgAABEYQyYmMoVgeWQrP3NYhBCgZBdAFRUkdBIAUguVVo1ZsWFcEGB5GMBkEjiCBL2a5ZAi+m2SAUR' +
                    'ExwKqPiuCafBkvBSCcmiYRACH5BAUHAA4ALAAAAAAQABAAAARs0MnpAKDYrbSWMp0xZIvBKYrXjNmADOhAKBiQDF5gGc' +
                    'ICNAyJTwFYTBaDQ0HAkgwSmAUj0OkMrkZM4HBgKK7YTKDRICAo2clAEIheKc9CISjEVTuEQrJASGcSBQcSUFEUDQUXJBgD' +
                    'BW0Zj34RACH5BAUHAA8ALAAAAAAQABAAAARf8Mn5xqBYgrVC4EEmBcOSfAEjSopJMglmcQlgBYjE5NJgZwjCAbO4YBAJjp' +
                    'IjSiAQh5ayyRAIDKvJIbnIagoFRFdkQDQKC0RBsCIUFAWsT7RwG410R8HiiK0WBwJjFBEAIfkEBQcADgAsAQABAA8ADwAABF' +
                    'rQybEWADXJLUHHAMJxIDAgnrOo2+AOibEMh1LN62gIxphzitRoCDAYNcNN6FBLShao4WzwHDQKvVGhoFAwGgtFgQHENhoB7nCwH' +
                    'RAIC0EyUcC8Zw1ha3NIRgAAIfkEBQcADwAsAAAAABAAEAAABGDwyfnWoljaNYYFV+Zx3hCEGEcuypBtMJBISpClAWLfWODymI' +
                    'FiCJwMDMiZBNAAYFqUAaNQ2E0YBIXGURAMCo1AAsFYBBoIScBJEwgSVcmP0li4FwcHz+FpCCQMPCFINxEAIfkEBQcADgAsAAA' +
                    'BABAADwAABFzQyemWXYNqaSXY2vVtw3UNmROM4JQowKKlFOsgRI6ASQ8IhSADFAjAMIMAgSYJtByxyQIhcEoaBcSiwegpDgvAw' +
                    'SBJ0AIHBoCQqIAEi/TCIAABGhLG8MbcKBQgEQAh+QQFBwAPACwAAAEAEAAPAAAEXfDJSd+qeK5RB8fDRRWFspyotAAfQBbfNLCV' +
                    'USSdKDV89gDAwcFBIBgywMRnkWBgcJUDKSZRIKAPQcGwYByAAYTEEJAAJIGbATEQ+B4ExmK9CDhBd8ThdHw/AmUYEQAh+QQFBwAP' +
                    'ACwAAAEADwAPAAAEXvBJQIa8+ILSspdHkXxS9wxF4Q3L2aTBeC0sFjhAtuyLIjAMhYc2GBgaSKGuyNoBDp7czFAgeBIKwC6kWCAMx' +
                    'USAFjtNCAAFGGF5tCQLAaJnWCTqHoREvQuQJAkyGBEAOw==" alt="img Loader"' + ' />',
        imgCtx: '',
		targetAttr: null,
		container: null
    }
    var methods = {
        init: function () {
            this.attr = $.extend(true, {}, attr);
            this.attr.target = $(this);
            this.attr.imgCtx = $(this.attr.imgLoader).insertBefore(this.attr.target);
			
			$(this.attr.imgCtx).wrap('<div class="jLoader" />')
            
			this.attr.container = $(this.attr.imgCtx).parent();
			
			var imgCtxSize = {
                width: $(this.attr.imgCtx).width(),
                height: $(this.attr.imgCtx).height()
            };
            
			this.attr.targetAttr = {
                width: $(this.attr.target).css('width'),
                height: $(this.attr.target).css('height'),
				marginLeft: $(this.attr.target).css('margin-left'),
				marginRight: $(this.attr.target).css('margin-right'),
				marginTop: $(this.attr.target).css('margin-top'),
				marginBottom: $(this.attr.target).css('margin-bottom'),
				float: $(this.attr.target).css('float'),
				verticalAlign: $(this.attr.target).css('vertical-align'),
				textAlign: $(this.attr.target).css('text-align'),
				display: $(this.attr.target).css('display'),
				position: $(this.attr.target).css('position'),
				left: $(this.attr.target).css('left'),
				top: $(this.attr.target).css('top'),
				right: $(this.attr.target).css('right'),
				bottom: $(this.attr.target).css('bottom')
            };
			
			(this.attr.container).css({
				'width': this.attr.targetAttr.width,	
				'height': this.attr.targetAttr.height,
				'margin-left': this.attr.targetAttr.marginLeft,
				'margin-right': this.attr.targetAttr.marginRight,
				'margin-top': this.attr.targetAttr.marginTop,
				'margin-bottom': this.attr.targetAttr.marginBottom,
				'float': this.attr.targetAttr.float,
				'vertical-align': this.attr.targetAttr.verticalAlign,
				'text-align': this.attr.targetAttr.textAlign,
				'display': this.attr.targetAttr.display,
				'position': this.attr.targetAttr.position,
				'left': this.attr.targetAttr.left,
				'top': this.attr.targetAttr.top,
				'right': this.attr.targetAttr.right,
				'bottom': this.attr.targetAttr.bottom
			});
			
            $(this.attr.target).css({ 'visibility': 'hidden', 'display' : 'none' });
        },
        end: function () {
            if (!this.attr || !this.attr.container) return this;
            $(this.attr.container).remove();
            $(this.attr.target).css({
                'visibility': 'visible',
				'display': this.attr.targetAttr.display
            });
        }
    }

    $.fn.loader = function (method) {
        $args = arguments;
        $(this).each(function () {
            if (methods[method]) {
                return methods[method].apply(this, Array.prototype.slice.call($args, 1));
            } else if (typeof method === 'object' || !method) {
                return methods.init.apply(this, $args);
            } else {
                $.error('Method "' + method + '" does not exist on jQuery.loader');
            }
        });
    };
})(jQuery)