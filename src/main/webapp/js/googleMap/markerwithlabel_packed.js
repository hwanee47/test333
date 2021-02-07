/*!
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function inherits(b,a){function c(){}c.prototype=a.prototype;b.superClass_=a.prototype;b.prototype=new c();b.prototype.constructor=b}function MarkerLabel_(a,b,c){this.marker_=a;this.handCursorURL_=a.handCursorURL;this.labelDiv_=document.createElement("div");this.labelDiv_.style.cssText="position: absolute; overflow: hidden;";this.crossDiv_=MarkerLabel_.getSharedCross(b)}inherits(MarkerLabel_,google.maps.OverlayView);MarkerLabel_.getSharedCross=function(a){var b;if(typeof MarkerLabel_.getSharedCross.crossDiv==="undefined"){b=document.createElement("img");b.style.cssText="position: absolute; z-index: 1000002; display: none;";b.style.marginLeft="-8px";b.style.marginTop="-9px";b.src=a;MarkerLabel_.getSharedCross.crossDiv=b}return MarkerLabel_.getSharedCross.crossDiv};MarkerLabel_.prototype.onAdd=function(){var k=this;var e=false;var n=false;var l;var h,c;var a;var m;var j;var b;var d=20;var i="url("+this.handCursorURL_+")";var g=function(o){if(o.preventDefault){o.preventDefault()}o.cancelBubble=true;if(o.stopPropagation){o.stopPropagation()}};var f=function(){k.marker_.setAnimation(null)};this.getPanes().markerLayer.appendChild(this.labelDiv_);if(typeof MarkerLabel_.getSharedCross.processed==="undefined"){this.getPanes().markerLayer.appendChild(this.crossDiv_);MarkerLabel_.getSharedCross.processed=true}this.listeners_=[google.maps.event.addDomListener(this.labelDiv_,"mouseover",function(o){if(k.marker_.getDraggable()||k.marker_.getClickable()){this.style.cursor="pointer";google.maps.event.trigger(k.marker_,"mouseover",o)}}),google.maps.event.addDomListener(this.labelDiv_,"mouseout",function(o){if((k.marker_.getDraggable()||k.marker_.getClickable())&&!n){this.style.cursor=k.marker_.getCursor();google.maps.event.trigger(k.marker_,"mouseout",o)}}),google.maps.event.addDomListener(this.labelDiv_,"mousedown",function(o){n=false;if(k.marker_.getDraggable()){e=true;this.style.cursor=i}if(k.marker_.getDraggable()||k.marker_.getClickable()){google.maps.event.trigger(k.marker_,"mousedown",o);g(o)}}),google.maps.event.addDomListener(document,"mouseup",function(p){var o;if(e){e=false;k.eventDiv_.style.cursor="pointer";google.maps.event.trigger(k.marker_,"mouseup",p)}if(n){if(m){o=k.getProjection().fromLatLngToDivPixel(k.marker_.getPosition());o.y+=d;k.marker_.setPosition(k.getProjection().fromDivPixelToLatLng(o));try{k.marker_.setAnimation(google.maps.Animation.BOUNCE);setTimeout(f,1406)}catch(q){}}k.crossDiv_.style.display="none";k.marker_.setZIndex(l);a=true;n=false;p.latLng=k.marker_.getPosition();google.maps.event.trigger(k.marker_,"dragend",p)}}),google.maps.event.addListener(k.marker_.getMap(),"mousemove",function(p){var o;if(e){if(n){p.latLng=new google.maps.LatLng(p.latLng.lat()-h,p.latLng.lng()-c);o=k.getProjection().fromLatLngToDivPixel(p.latLng);if(m){k.crossDiv_.style.left=o.x+"px";k.crossDiv_.style.top=o.y+"px";k.crossDiv_.style.display="";o.y-=d}k.marker_.setPosition(k.getProjection().fromDivPixelToLatLng(o));if(m){k.eventDiv_.style.top=(o.y+d)+"px"}google.maps.event.trigger(k.marker_,"drag",p)}else{h=p.latLng.lat()-k.marker_.getPosition().lat();c=p.latLng.lng()-k.marker_.getPosition().lng();l=k.marker_.getZIndex();j=k.marker_.getPosition();b=k.marker_.getMap().getCenter();m=k.marker_.get("raiseOnDrag");n=true;k.marker_.setZIndex(1000000);p.latLng=k.marker_.getPosition();google.maps.event.trigger(k.marker_,"dragstart",p)}}}),google.maps.event.addDomListener(document,"keydown",function(o){if(n){if(o.keyCode===27){m=false;k.marker_.setPosition(j);k.marker_.getMap().setCenter(b);google.maps.event.trigger(document,"mouseup",o)}}}),google.maps.event.addDomListener(this.labelDiv_,"click",function(o){if(k.marker_.getDraggable()||k.marker_.getClickable()){if(a){a=false}else{google.maps.event.trigger(k.marker_,"click",o);g(o)}}}),google.maps.event.addDomListener(this.labelDiv_,"dblclick",function(o){if(k.marker_.getDraggable()||k.marker_.getClickable()){google.maps.event.trigger(k.marker_,"dblclick",o);g(o)}}),google.maps.event.addListener(this.marker_,"dragstart",function(o){if(!n){m=this.get("raiseOnDrag")}}),google.maps.event.addListener(this.marker_,"drag",function(o){if(!n){if(m){k.setPosition(d);k.labelDiv_.style.zIndex=1000000+(this.get("labelInBackground")?-1:+1)}}}),google.maps.event.addListener(this.marker_,"dragend",function(o){if(!n){if(m){k.setPosition(0)}}}),google.maps.event.addListener(this.marker_,"position_changed",function(){k.setPosition()}),google.maps.event.addListener(this.marker_,"zindex_changed",function(){k.setZIndex()}),google.maps.event.addListener(this.marker_,"visible_changed",function(){k.setVisible()}),google.maps.event.addListener(this.marker_,"labelvisible_changed",function(){k.setVisible()}),google.maps.event.addListener(this.marker_,"title_changed",function(){k.setTitle()}),google.maps.event.addListener(this.marker_,"labelcontent_changed",function(){k.setContent()}),google.maps.event.addListener(this.marker_,"labelanchor_changed",function(){k.setAnchor()}),google.maps.event.addListener(this.marker_,"labelclass_changed",function(){k.setStyles()}),google.maps.event.addListener(this.marker_,"labelstyle_changed",function(){k.setStyles()})]};MarkerLabel_.prototype.onRemove=function(){var a;this.labelDiv_.parentNode.removeChild(this.labelDiv_);for(a=0;a<this.listeners_.length;a++){google.maps.event.removeListener(this.listeners_[a])}};MarkerLabel_.prototype.draw=function(){this.setContent();this.setTitle();this.setStyles()};MarkerLabel_.prototype.setContent=function(){var a=this.marker_.get("labelContent");if(typeof a.nodeType==="undefined"){this.labelDiv_.innerHTML=a}else{this.labelDiv_.innerHTML="";this.labelDiv_.appendChild(a)}};MarkerLabel_.prototype.setTitle=function(){this.labelDiv_.title=this.marker_.getTitle()||""};MarkerLabel_.prototype.setStyles=function(){var b,a;this.labelDiv_.className=this.marker_.get("labelClass");this.labelDiv_.style.cssText="";a=this.marker_.get("labelStyle");for(b in a){if(a.hasOwnProperty(b)){this.labelDiv_.style[b]=a[b]}}this.setMandatoryStyles()};MarkerLabel_.prototype.setMandatoryStyles=function(){this.labelDiv_.style.position="absolute";this.labelDiv_.style.overflow="hidden";if(typeof this.labelDiv_.style.opacity!=="undefined"&&this.labelDiv_.style.opacity!==""){this.labelDiv_.style.MsFilter='"progid:DXImageTransform.Microsoft.Alpha(opacity='+(this.labelDiv_.style.opacity*100)+')"';this.labelDiv_.style.filter="alpha(opacity="+(this.labelDiv_.style.opacity*100)+")"}this.setAnchor();this.setPosition();this.setVisible()};MarkerLabel_.prototype.setAnchor=function(){var a=this.marker_.get("labelAnchor");this.labelDiv_.style.marginLeft=-a.x+"px";this.labelDiv_.style.marginTop=-a.y+"px"};MarkerLabel_.prototype.setPosition=function(b){var a=this.getProjection().fromLatLngToDivPixel(this.marker_.getPosition());if(typeof b==="undefined"){b=0}this.labelDiv_.style.left=Math.round(a.x)+"px";this.labelDiv_.style.top=Math.round(a.y-b)+"px";this.setZIndex()};MarkerLabel_.prototype.setZIndex=function(){var a=(this.marker_.get("labelInBackground")?-1:+1);if(typeof this.marker_.getZIndex()==="undefined"){this.labelDiv_.style.zIndex=parseInt(this.labelDiv_.style.top,10)+a}else{this.labelDiv_.style.zIndex=this.marker_.getZIndex()+a}};MarkerLabel_.prototype.setVisible=function(){if(this.marker_.get("labelVisible")){this.labelDiv_.style.display=this.marker_.getVisible()?"block":"none"}else{this.labelDiv_.style.display="none"}};function MarkerWithLabel(a){a=a||{};a.labelContent=a.labelContent||"";a.labelAnchor=a.labelAnchor||new google.maps.Point(0,0);a.labelClass=a.labelClass||"markerLabels";a.labelStyle=a.labelStyle||{};a.labelInBackground=a.labelInBackground||false;if(typeof a.labelVisible==="undefined"){a.labelVisible=true}if(typeof a.raiseOnDrag==="undefined"){a.raiseOnDrag=true}if(typeof a.clickable==="undefined"){a.clickable=true}if(typeof a.draggable==="undefined"){a.draggable=false}if(typeof a.optimized==="undefined"){a.optimized=false}a.crossImage=a.crossImage||"http"+(document.location.protocol==="https:"?"s":"")+"://maps.gstatic.com/intl/en_us/mapfiles/drag_cross_67_16.png";a.handCursor=a.handCursor||"http"+(document.location.protocol==="https:"?"s":"")+"://maps.gstatic.com/intl/en_us/mapfiles/closedhand_8_8.cur";a.optimized=false;this.label=new MarkerLabel_(this,a.crossImage,a.handCursor);google.maps.Marker.apply(this,arguments)}inherits(MarkerWithLabel,google.maps.Marker);MarkerWithLabel.prototype.setMap=function(a){google.maps.Marker.prototype.setMap.apply(this,arguments);this.label.setMap(a)};