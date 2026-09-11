import { useCallback, useEffect, useState } from 'react';

// Navegação sincronizada com a URL/histórico do navegador (History API), pra
// voltar/avançar funcionar de verdade — inclusive os botões 4 (voltar) e 5
// (avançar) do mouse: eles disparam a navegação nativa de histórico do
// navegador, que já funciona sozinha desde que a gente empilhe estados reais
// com pushState (senão não tem pra onde voltar).
//
// Rotas:
//   /                          -> aba Warframes
//   /semanais                  -> aba Semanais
//   /builds                    -> aba Builds (categoria padrão)
//   /builds/:categoria         -> aba Builds numa categoria
//   /builds/:categoria/:id     -> aba Builds com uma build aberta

function parse(pathname) {
    const [, tab, category, buildId] = pathname.split('/');
    if (tab === 'semanais') return { tab: 'weekly' };
    if (tab === 'builds') return { tab: 'builds', category: category || null, buildId: buildId || null };
    return { tab: 'warframes' };
}

function toPath(route) {
    if (route.tab === 'weekly') return '/semanais';
    if (route.tab === 'builds') {
        if (route.category && route.buildId) return `/builds/${route.category}/${route.buildId}`;
        if (route.category) return `/builds/${route.category}`;
        return '/builds';
    }
    return '/';
}

export function useRoute() {
    const [route, setRoute] = useState(() => parse(window.location.pathname));

    useEffect(() => {
        const onPopState = () => setRoute(parse(window.location.pathname));
        window.addEventListener('popstate', onPopState);
        return () => window.removeEventListener('popstate', onPopState);
    }, []);

    const navigate = useCallback((nextRoute, { replace = false } = {}) => {
        const path = toPath(nextRoute);
        if (path !== window.location.pathname) {
            if (replace) window.history.replaceState(null, '', path);
            else window.history.pushState(null, '', path);
        }
        setRoute(nextRoute);
    }, []);

    return [route, navigate];
}
