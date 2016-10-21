/*
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
*/
/* 
    Created on : 09-07-2014, 13:25:54
    Author     : giappaig
*/

gSelect = function()
{

    var gSelect = function()
    {
        var that = this;
        that.style = null;
        that.$gSelect = null;
        that.$select = null;
        that.$input = null;
        that.$dropdown = null;
        that.$tmp_input = null;

        this.selectElement = null;
        this.multiple = true;

        that.$selectedIndex = 0;
        that.$input_width = 3;
        that.$selectedItem = [];
        var $timeout = 0;
        
        this.img_close = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAEJJREFUeNpi+P//PwOxmIFsxQwMDL4MDAy4+WgSMIzCx6YYXYMvPpOxaWDAqhiLU3yp7mZ0J1EhnAlhAAAAAP//AwDj+evWJHcWRwAAAABJRU5ErkJggg==";
        this.img_close_hover = "data:image/png;base64,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";


        this.data = 
        [
           { "id" : "a" , "text" : "Please"},
           { "id" : "b" , "text" : "don't"},
           { "id" : "c" , "text" : "say"},
           { "id" : "d" , "text" : "somebody"},
           { "id" : "e" , "text" : "the"},
           { "id" : "f" , "text" : "password"},
        ];
        
        this.searchEnable = true;
        


        this.setData = function(obj)
        {
            this.data = obj;
            this.init();
            this.showDropDown();
        };


        //get data from select tag
        this.setDataFromTagSelect = function(element)
        {
            var b = [];
            var options = element.options;
            var data = [];
            for( var i = 0; i < options.length; i++)
            {
                data.push({ "id" : options[i].value, "text" : options[i].text});
                if(options[i].selected)
                {
                    b.push({ "id" : options[i].value, "text" : options[i].text});
                }
            }
                console.log(b);
            for( var i in b)
            {
                that.addSelectedItem(b[i]);
            }

            this.setData(data);
            return data;
        };


        this.sentToTagSelect = function(element)
        {
            element.innerHTML = "";
            for( var i in that.$selectedItem)
            {
                var option = document.createElement("option");
                option.value = that.$selectedItem[i]["id"];
                option.setAttribute("selected", "selected");
                option.text = that.$selectedItem[i]["text"];
                element.appendChild(option);
            }
        };


        var KEY_BACKSPACE = 8;
        var KEY_ENTER = 13;
        var KEY_LEFT = 37;
        var KEY_UP = 38;
        var KEY_RIGHT = 39;
        var KEY_DOWN = 40;
        var KEY_DEL = 46;



       this.addSelectedItem = function(item)
       {
            var key = item["id"];
            var value = item["text"];
            var div2 = document.createElement("div");
            div2.className = "item";
            div2.setAttribute( "data-key", key);

            var v = document.createElement("span");
            v.className = "value";
            v.appendChild( document.createTextNode(value));

             var close = document.createElement("span");
             close.className = "close";
             close.innerHTML = ('<img src="' + this.img_close + '" onmouseover="this.src=\'' + this.img_close_hover + '\'" onmouseleave="this.src=\'' + this.img_close + '\'" />');
             close.onclick = function()
             {
                 that.removeItem(this.parentNode);
             };

             div2.appendChild(v);
             div2.appendChild(close);
             if(that.multiple)
             {
                that.$input.parentNode.insertBefore( div2,  that.$input);
             }
             else
             {

                 for( var i = 0; i < that.$input.parentNode.children.length; i++)
                 {
                     //Neu la Item thi xoa no khoi danh sach
                     if(that.$input.parentNode.children[i].getAttribute("data-key"))
                     {
                         that.$input.parentNode.removeChild(that.$input.parentNode.children[i]);
                         i--;
                     }
                 }
                 that.$input.parentNode.insertBefore( div2,  that.$input);
             }

            that.afterAddOrRemove();
       };

       this.afterAddOrRemove = function()
       {

            that.refreshItem();
            that.sentToTagSelect(that.select);

            that.relocateDropDown();
            that.refreshDropDown();
            that.showDropDown();

            that.$input.value = "";
            that.resizeInput();
            that.$input.focus();
       };



        this.resizeInput = function()
        {
            //copy value
            that.$tmp_input.innerHTML = that.$input.value;
            //show it to calcutate width
            that.$tmp_input.style.display = 'block';
            that.$input_width = that.$tmp_input.clientWidth;
            //hide it
            that.$tmp_input.style.display = 'none';
            //set it
            that.$input.style.width = (3 + that.$input_width) + 'px';
        };


        this.onSearchBoxChanged = function()
        {
            that.refreshDropDown();
        };



        this.relocateDropDown = function()
        {
            var dropdown_border = 1;
            that.$dropdown.style.position = 'absolute';
            var rect = that.$select.getBoundingClientRect();
            if(true)
            {
                that.$dropdown.style.top = Math.round( that.$select.offsetTop + rect.height) + 'px';
                that.$dropdown.style.left = Math.round( that.$select.offsetLeft ) + 'px';
            }

            that.$dropdown.style.width = Math.round( rect.width - 2 * dropdown_border) + 'px'; 
        };

        this.getKey = function(item)
        {
            return item.getAttribute("data-key");
        };

        this.getValue = function(item)
        {
            return item.getAttribute("data-value");
        };

        this.getItemsSelected = function()
        {
            return that.$selectedItem;
        };


        function contains(key)
        {
            for(var i in that.$selectedItem)
            {
                if(that.$selectedItem[i]["id"] == key)
                {
                    return true;
                }
            }
            return false;
        }


        this.refreshItem = function()
        {
            that.$selectedItem = [];
            var Items = that.$select.getElementsByTagName("div");

            for( var i = 0; i < Items.length; i++)
            {
                if(Items[i].className == "item")
                {
                    that.$selectedItem.push({ "id" : this.getKey(Items[i]), "text" : Items[i].getElementsByClassName("value")[0].innerHTML});
                }
            }

        };

        this.removeItem = function(item)
        {
            that.$select.removeChild(item);
            that.afterAddOrRemove();
        };

        function size(a)
        {
            var i = 0;
            for( var b in a)
            {
                i++;
            }
            //alert(i);
            return i;
        }

        this.dropDownSelecting = function()
        {
            var options = that.$dropdown.children;
            for(var i = 0; i < options.length; i++)
            {

                if( i == that.$selectedIndex)
                {
                    new Class(options[i]).addClass("option_selected");
                }
                else
                {
                    new Class(options[i]).removeClass("option_selected");
                }
            }
            //document.title = that.$selectedIndex;
        };

        this.refreshDropDown = function()
        {
            that.$dropdown.innerHTML = "";

            for (var i in that.data)
            {
                //console.log("290: i = " + i + ", ");
                
                //Chrome seperate LowerCase/UpperCase when match
                var a = that.data[i]["text"].toLowerCase();
                var b = that.$input.value.toLowerCase();

                if(this.searchEnable == false)
                {
                    f = true;
                }
                else
                {
                    f = a.match(b, "ig");
                }
                
                if(f)
                {
                    var div = document.createElement("div");
                    div.className = "option";

                    div.setAttribute("data-key", that.data[i]["id"]);
                    div.setAttribute("data-value", that.data[i]["text"]);

                    var value = document.createElement("span");
                    value.className = "value";
                    value.appendChild( document.createTextNode(that.data[i]["text"]));



                    div.onmousemove = function()
                    {
                        //Get Selected Index
                        var j = 0;
                        var b = this;
                        while(b.previousElementSibling != null)
                        {
                            b = b.previousElementSibling;
                            j++;
                        }
                        that.$selectedIndex = j;
                        that.dropDownSelecting();
                    };


                    div.onmousedown = function()
                    {
                        //addItem(this);
                        that.addSelectedItem({ "id" : this.getAttribute("data-key"), "text" : this.getAttribute("data-value")});
                        clearTimeout($timeout);
                        //alert("c");
                    };

                    div.onmouseup = function()
                    {
                        that.$input.focus();
                        //input lost focus when using it
                        //addItem(this);
                    };

                    //404053288623;


                    div.appendChild(value);

                    //that.$input.focus();

                    if( !contains(that.data[i]["id"]))
                    {
                        that.$dropdown.appendChild(div);
                    }
                }
            }

            if(that.multiple)
                that.$selectedIndex = 0;
            that.dropDownSelecting();
        };

        this.showDropDown = function()
        {
            that.$dropdown.style.display = 'block';
        };

        this.hideDropDown = function()
        {
            that.$dropdown.style.display = 'none';

        };

        this.deleteLeftItem = function()
        {
            var lastItem = that.$input.previousElementSibling;
            if(lastItem != null)
            {
                that.removeItem(lastItem);
            }
        };

        this.deleteRightItem = function()
        {
            var lastItem = that.$input.nextElementSibling;
            if(lastItem != null)
            {
                that.removeItem(lastItem);
            }
        };

        this.onblur = function()
        {
            $timeout = setTimeout( that.hideDropDown, 100);
        };

        this.onfocus = function()
        {
            clearTimeout($timeout);
            that.relocateDropDown();
            if( that.$dropdown.hasChildNodes())
                that.showDropDown();


        };


        this.onkeydown = function(e)
        {

            that.resizeInput();

            e = (e) ? e : ((event) ? e : null);
            //alert(e.keyCode); return;


            if(e.keyCode == KEY_BACKSPACE && that.$input.value == "")
            {
                that.deleteLeftItem();
            }

            if(e.keyCode == KEY_DEL && that.$input.value == "")
            {
                //if($size(that.data) > 0) // khi array co chi so mang la "key" thi length cua no = 0
                that.deleteRightItem();

            }

            if(e.keyCode == KEY_LEFT && that.$input.value == "")
            {
                 var leftItem = that.$input.previousElementSibling;
                 if(leftItem != null)
                 {
                    leftItem.parentNode.insertBefore(that.$input, leftItem);
                    //lost focus after insert
                    that.$input.focus();
                 }
            }

            if(e.keyCode == KEY_RIGHT && that.$input.value == "")
            {
                var rightItem = that.$input.nextElementSibling;
                if(rightItem != null)
                {
                    that.$input.parentNode.insertBefore(rightItem, that.$input);
                }
            }

            if(e.keyCode == KEY_DOWN)
            {
                that.$selectedIndex ++;
                if(that.$selectedIndex > that.$dropdown.children.length -1 )
                    that.$selectedIndex = 0;
                if(that.$selectedIndex < 0)
                    that.$selectedIndex = that.$dropdown.children.length - 1;


                that.dropDownSelecting();
            }

            if(e.keyCode == KEY_UP)
            {
                that.$selectedIndex --;
                if(that.$selectedIndex > that.$dropdown.children.length -1)
                    that.$selectedIndex = 0;
                if(that.$selectedIndex < 0)
                    that.$selectedIndex = that.$dropdown.children.length - 1;

                that.dropDownSelecting();

            }

            if(e.keyCode == KEY_ENTER)
            {

                var $d = that.$dropdown.children;
                for (var i = 0; i < $d.length; i++)
                {
                    if( i == that.$selectedIndex)
                    {
                        console.log({ "id" : $d[i].getAttribute("data-key"), "text" : $d[i].getAttribute("data-value")});
                        that.addSelectedItem({ "id" : $d[i].getAttribute("data-key"), "text" : $d[i].getAttribute("data-value")});
                    }
                }
                //cancel event submit when press Enter on Input Tag
                return !e;
            }
        };



        this.onkeyup = function(e)
        {

            that.relocateDropDown();
            //Neu cac phim duoc nhan khong phai la cac phim dieu khien
            if( 
                    e.keyCode != KEY_UP &&
                    e.keyCode != KEY_RIGHT &&
                    e.keyCode != KEY_DOWN &&
                    e.keyCode != KEY_LEFT &&
                    e.keyCode != KEY_ENTER &&
                    that.$input.value != ""
              )

            {

                that.resizeInput();
                that.onSearchBoxChanged();

                if( that.$dropdown.hasChildNodes())
                {
                    that.showDropDown();
                }
            }
        };



        this.replace = function(select)
        {

            try
            {

                that.select = select;

                that.multiple = select.multiple;


                select.style.display = 'none';

                that.$gSelect = document.createElement("div");
                that.$gSelect.className = "gSelect";

                var style = document.createElement("style");
                style.innerHTML = this.style;

                that.$select = document.createElement("div");
                that.$select.className = "alt_select";
                that.$select.style.display = "block";
                that.$select.style.cssFloat = "left";

                that.$input = document.createElement("input");
                //new Class(that.$input).addClass("alt_input") ;
                new Class(that.$input).addClass("item") ;
                //
                //style for alt input
                that.$input.style.textAlign = "left";
                that.$input.style.marginLeft = "0";
                that.$input.style.marginRight = "0";
                that.$input.style.paddingLeft = "0";
                that.$input.style.paddingRight = "0";
                that.$input.style.borderWidth = "0";
                that.$input.style.outline = "none";
                that.$input.style.background = "transparent";
                //Input Event
                that.$input.onblur = this.onblur;
                that.$input.onfocus = this.onfocus;
                that.$input.onkeyup = this.onkeyup;
                that.$input.onkeydown = this.onkeydown;
                that.$select.appendChild(that.$input);

                var $clear_left = document.createElement("div");
                $clear_left.className = "clear_left";

                that.$dropdown = document.createElement("div");
                new Class(that.$dropdown).addClass("dropdown");

                that.$tmp_input = document.createElement("div");
                that.$tmp_input.setAttribute("style", "float: left; display: none;");


                that.$gSelect.appendChild(that.$select);
                that.$gSelect.appendChild($clear_left);
                that.$gSelect.appendChild(that.$dropdown);
                that.$gSelect.appendChild(that.$tmp_input);
                that.$gSelect.appendChild($clear_left);


                that.$select.onclick = function()
                {
                    that.$input.focus();
                };
                that.$dropdown.onmouseover = function()
                {
                    clearTimeout($timeout);
                };

                select.parentNode.insertBefore(that.$gSelect, select);

                this.setDataFromTagSelect(select);

                this.init();
            }
            catch(e)
            {
                alert("\"id\" is invalid !\nException: " + e);
            }


        };

        this.replaceById = function(id)
        {
            this.replace(document.getElementById(id));
        };

        this.replaceAll = function()
        {
            var selects = document.getElementsByTagName("select");
            for( var e = 0; e < selects.length; e++)
            {
                new gSelect().replace(selects[e]);
            }
        };

        this.val = function()
        {
            var s = "";
            var i;
            for(i in this.$selectedItem)
            {
                s += i;
                s += ",";
            }
            return s.substr(0, s.length-1);
        };



        //init
        this.init = function()
        {
            that.resizeInput();
            that.refreshDropDown();
            that.relocateDropDown();
            that.dropDownSelecting();
            that.hideDropDown();
        };

    };


    var Class = function(e)
    {

        this.addClass = function(c)
        {
            var oldClass = e.getAttribute("class");
            if(oldClass == null)
            {
                e.setAttribute("class", c);
            }
            else
            if( ! oldClass.match(c))
            {
                e.setAttribute("class", oldClass + " " + c);
            }
        };

        this.removeClass = function(c)
        {
            var oldClass = e.getAttribute("class");
            if(oldClass == null)
            {

            }
            else
            if( oldClass.match( " " + c))
            {
                e.setAttribute("class", oldClass.replace(" " + c, ""));
            }
            else
            if( oldClass.match(c + " "))
            {
                e.setAttribute("class", oldClass.replace(c + " ", ""));
            }
            else
            if( oldClass == c)
            {
                e.setAttribute("class", oldClass.replace(c, ""));
            }
        };
    };
    
    $g = new gSelect();
    
    this.setOnTextChanged = function($function)
    {
        $g.onSearchBoxChanged = $function;
    };
    
    this.setData = function(data)
    {
        $g.setData(data);
    };
    
    this.setEnableSearch = function($boolean)
    {
        $g.searchEnable = $boolean;
    }
    
    this.getSearchText = function()
    {
        return $g.$input.value;
    }
    
    this.replace = function(element)
    {
        $g.replace(element);
    };
    this.replaceAll = function()
    {
        $g.replaceAll();
    };
    this.replaceById = function(id)
    {
        $g.replaceById(id);
    };
    this.getSelectedItem = function()
    {
    	return $g.$selectedItem;
    };
    this.addSelectedItem = function($item)
    {
        $g.addSelectedItem($item);
    }
    this.refresh = function()
    {
        $g.refreshDropDown();
    };
    this.val = function()
    {
        return $g.val();
    };
    

};