// data.js (FAMILY) se tree banata hai. UI ko data ki khabar nahi, data ko UI ki nahi.
angular.module('vansh', []).controller('TreeCtrl', function () {
  var vm = this, D = FAMILY;
  var byId = {}, partnerOf = {}, built = {};

  D.people.forEach(function (p) { byId[p.id] = p; });
  D.marriages.forEach(function (m) { partnerOf[m.a] = m.b; partnerOf[m.b] = m.a; });

  // is jodi (person + partner) ke saare bachche
  function childIdsOf(id, pid) {
    var out = [];
    D.parentChild.forEach(function (r) {
      var mine = r.parents.indexOf(id) > -1 || (pid && r.parents.indexOf(pid) > -1);
      if (mine && out.indexOf(r.child) < 0) out.push(r.child);
    });
    return out;
  }

  function build(id) {
    var pid = partnerOf[id];
    var partner = (pid && !built[pid]) ? byId[pid] : null;   // step 6 mein yahin cross-branch badge aayega
    built[id] = true;
    if (partner) built[pid] = true;

    var kids = childIdsOf(id, partner ? pid : null)
      .filter(function (cid) { return !built[cid]; })
      .map(build);

    return { person: byId[id], partner: partner, children: kids, open: false };
  }

  vm.roots = [build(D.rootId)];
});
