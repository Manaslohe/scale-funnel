let hasClientNavigated = false;
let introFinished = false;
const finishListeners = new Set<() => void>();

export const markClientNavigation = () => {
	hasClientNavigated = true;
};

export const shouldShowIntroLoader = () => !hasClientNavigated;

export const hasNavigatedBefore = () => hasClientNavigated;

export const isIntroFinished = () => introFinished || hasClientNavigated;

export const markIntroFinished = () => {
	if (introFinished) return;
	introFinished = true;
	finishListeners.forEach((fn) => fn());
};

export const subscribeIntroFinish = (fn: () => void) => {
	if (introFinished) {
		fn();
		return () => {};
	}
	finishListeners.add(fn);
	return () => finishListeners.delete(fn);
};
