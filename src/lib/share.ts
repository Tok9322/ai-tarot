/**
 * X（Twitter）のシェアURLを生成
 */
export function getTwitterShareUrl(text: string, url: string): string {
  const params = new URLSearchParams({ text, url });
  return `https://twitter.com/intent/tweet?${params.toString()}`;
}

/**
 * LINEのシェアURLを生成
 */
export function getLineShareUrl(text: string, url: string): string {
  const message = `${text}\n${url}`;
  return `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}&text=${encodeURIComponent(message)}`;
}

/**
 * URLをクリップボードにコピー
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}
