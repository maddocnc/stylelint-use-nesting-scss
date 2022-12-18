export default function fixNestingRule(rule1, rule2) {
	console.log(rule1.selectors)
	rule1.selectors = rule1.selectors.map(
		selector => {
			const child = selector.slice(rule2.selector.length)
			const prefix = child.at(0) === ' ' ? '' : `&`
			return prefix + child
		}
	);

	rule2.append(rule1);
}
