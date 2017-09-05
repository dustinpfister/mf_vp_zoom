var vp = (function () {

    return {

        nw : 320, // native sidth and height
        nh : 240,

        w : 320, // current width and height
        h : 240,

        cx : 0, // center position of the view port
        cy : 0,

        x : -160, // upper left corner of the view port
        y : -120,

        z : 1, // current zoom level

        // additional values that make the view port a 'standard box' (see mf_canvas readme)
        hw : 160, // current half width and height
        hh : 120,
        a : 0,
        f : 'rgba(255,255,0,.2)',
        s : '#ffffff',
        i : 1,

        // move the center of the camera over the given point, and update relevant values
        lookAt : function (cx, cy) {

            this.cx = cx || this.cx;
            this.cy = cy || this.cy;

            // this changes the position of the corner of the view port
            this.x = this.cx - this.w / 2;
            this.y = this.cy - this.h / 2;

        },

        // return a new array of standard boxes from the given array
        // that conatins boxes that are to be rendered
        inViewSTBX : function (BXArray, clone) {

            var i = BXArray.length,
            bx,
            v = [];
            while (i--) {

                // clone or ref
                bx = clone ? _.c(BXArray[i]) : BXArray[i];

                if (_.b(this, bx)) {

                    v.push(bx);

                }

            }

            // return the the stbx's
            return v;

        },

        scaleForCanvas : function (BXArray, width, height, xOff, yOff) {

            // only use clones of ones in view
            var bxA = this.inViewSTBX(BXArray, true),

            i = bxA.length,
            bx;

            width = width || 320;
            height = height || 240;
            xOff = xOff || 0;
            yOff = yOff || 0;
            while (i--) {

                bx = bxA[i];

                var nw = bx.w / this.z;
                var nh = bx.h / this.z;

                var dw = bx.w - nw;
                var dh = bx.h - nh;

                bx.w = nw;
                bx.h = nh;
                bx.x += dw / 2 + xOff;
                bx.y += dw / 2 + yOff;

                //bx.x = bx.x/this.z - this.x/this.z;

            }

            // return the adjusted copys
            return bxA;

        },

        zoom : function (z) {

            // set zoom, if doing so;
            this.z = z || this.z;

            // this will change current width
            this.w = this.nw * this.z;
            this.h = this.nh * this.z;
            this.hw = this.w / 2;
            this.hh = this.h / 2;

            // call a lookAt at the current cx, and cy
            this.lookAt();

        }

    };

}
    ());
