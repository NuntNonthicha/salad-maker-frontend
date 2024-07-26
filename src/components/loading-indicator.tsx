export const indicatorCount = 4;

export default function LoadingIndicator() {
    return (
        <div id="loading-indicator" className="flex h-full !w-fit gap-1">
            {Array.from({ length: indicatorCount }).map((_, i) => (
                <span
                    key={i}
                    className={`animate-float block aspect-square min-h-full w-auto rounded-full bg-current transition-colors`}
                    style={{
                        animationDelay: `${i * 200}ms`,
                    }}
                />
            ))}
        </div>
    );
}
