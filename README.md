# mf_vp
### A view port manager

This is my take on a 2d view port manager (or camera). It contains values, an methods that have to do with the representation a certain section of a 2d world that I would call a "field of view". This feild of view can then be scaled down (or up) to a certian fixed native size that will typically be a canvas elements native resolution.

tldr; It makes 2d panning, and zooming possible.

### vp.lookAt(cx,cy)

Center the view port over the given point.

### vp.inViewSTBX(BXArray,clone);

Returns an array of references (or shallow copy's) of standard boxes from the given array of standard boxes (BXArray) that are inside the current view port.

### vp.zoom(l)

set the current zoom level