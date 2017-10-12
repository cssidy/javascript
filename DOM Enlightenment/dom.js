(function(win) {

    var global = win;
    var doc = this.document;
    var dom = function (params, context) {
        return new GetOrMakeDom(params, context);
    };

    var regXContainsTag = /^\s*<(\w+|!)[^>]*>/;

    var GetOrMakeDom = function (params, context) {
        var currentContext = doc;
        if (context) {
            if (context.nodeType) {
                currentContext = context;
            } else {
                currentContext = doc.querySelector(context);
            }
        }

        // if no params, return empty dom() object
        if (!params || params === '' ||
            typeof params === 'string' && params.trim() === '') {
            this.length = 0;
            return this;
        }

        // if HTML string, construct domfragment, fill object, then return object
        if (typeof params === 'string' && regXContainsTag.test(params)) {
            var divElm = currentContext.createElement('div');
            divElm.className = 'hippo-doc-frag-wrapper';
            var docFrag = currentContext.createDocumentFragment();
            docFra.appendChild(divElm);
            var queryDiv = docFrag.querySelector('div');
            queryDiv.innerHTML = params;
            var numberOfChildren = queryDiv.children.length;
            // loop over nodelist and fill object
            for (var z = 0; z < numberOfChildren; z++) {
                this[z] = queryDiv.children[z];
            }
            // give the object a length value
            this.length = numberOfChildren;
            // return object
            return this;
        }

        // if a single node reference is passed, fill object, return object
        if (typeof params === 'object' && params.nodeName) {
            this.length = 1;
            this[0] = params;
            return this;
        }

        // if it's an object create nodelist
        var nodes;
        if (typeof params !== 'string'){ // nodelist or array
            nodes = params;
        }else {// ok string
            nodes = currentContext.querySelectorAll(params.trim());
        }
        // loops over array or nodelist created above to fill object
        var nodeLength = nodes.length;
        for (var i = 0; i < nodeLength; i++) {
            this[i] = nodes[i];
        }
        // give the object a length
        this.length = nodeLength;
        // return object
        return this;

    };


    dom.fn.each = function (callback) {
        var len = this.length;

        for(var i = 0; i < len; i++){
            callback.call(this[i], i, this[i]);
        }

        return this;
    };

    dom.fn.html = function(htmlString){
        if(htmlString){
            return this.each(function(){
                this.innerHTML = htmlString;
            });
        }else{
            return this[0].innerHTML;
        }
    };

    dom.fn.text = function(textString){
        if(textString){
            return this.each(function(){
                this.textContent = textString;
            });
        }else{
            return this[0].textContent.trim();
        }
    };

    dom.fn.append = function(stringOrObject){
        return this.each(function(){
            if(typeof stringOrObject === 'string'){
                this.insertAdjacentHTML('beforeend', stringOrObject);
            }else{
                var that = this;
                dom(stringOrObject).each(function(name, value){
                    that.insertAdjacentHTML('beforeend', value.outerHTML);
                });
            }
        });
    };




    // expose dom to global scope
    global.dom = dom;

    // short cut to prototype
    dom.fn = GetOrMakeDom.prototype;

})(window);

