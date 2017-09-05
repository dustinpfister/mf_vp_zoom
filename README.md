# mf_vp_zoom
### A not so simple view port manager

This is a more advanced version of my [mf_vp](https://github.com/dustinpfister/mf_vp) project that allows for view port zooming.

simply put it makes 2d scrolling, and zooming possible.

### vp.lookAt(cx,cy)

Center the view port over the given point.

### vp.inViewSTBX(BXArray,clone);

Returns an array of references (or shallow copy's) of standard boxes from the given array of standard boxes (BXArray) that are inside the current view port.

### vp.zoom(l)

set the current zoom level