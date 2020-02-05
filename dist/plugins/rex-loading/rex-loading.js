var animation = function() {};
animation.prototype = {
    open: function() {
        var bg666 = document.createElement('div');
        bg666.id = 'bg666';
        document.body.appendChild(bg666);
        var animateFather = document.createElement('div');
        animateFather.id = 'animateFather';
        bg666.appendChild(animateFather);
        var animateChild1 = document.createElement('div');
        animateChild1.id = 'animateChild1';
        animateFather.appendChild(animateChild1);
        var animateChild2 = document.createElement('div');
        animateChild2.id = 'animateChild2';
        animateFather.appendChild(animateChild2);
        document.body.style.overflowY = 'hidden';
    },
    close: function() {
        document.body.removeChild(bg666);
        document.body.style.overflowY = 'scroll';
    }
};
var animate = new animation();
