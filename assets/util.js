wasHit = (attacked, attacker) => {
  attacked.hp -= attacker.att;
  console.log(`\n\n${attacker.name} attacked!!!\n`);
  console.log(`${attacked.name} was hit! remaining health: ${attacked.hp}\n`);
};

ssuperEffective = (attacked, attacker) => {
  attacked.hp -= 5;
  wasHit(attacked, attacker);
  console.log("its super effective!!!\n\n");
};

module.exports = {
  wasHit: wasHit,
  superEffective: superEffective
};
