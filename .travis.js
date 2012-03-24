$.getJSON('https://secure.travis-ci.org/karmi/tire.json?branch=master&callback=?', function(data) {
  // console.log(data);
  status  = (data.last_build_status == 0);
  color   = status ? 'green' : 'red';
  message = status ? "TESTS PASSING" : "TESTS FAILED" ;
  title   = "Last build at TravisCI: " + data.last_build_finished_at + ", duration: ~" + Math.round(data.last_build_duration/60) + " minutes"
  content = $('<small><a href="http://travis-ci.org/karmi/tire" title="'+title+'">'+message+'</a></small>');
  content.css({position: "absolute", right: "1em", top: "2em"}).find('a').css({color: color});
  $('article h1').css({position: "relative"}).append(content);
  return;
});
