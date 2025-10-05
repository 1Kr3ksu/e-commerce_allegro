# Instrukcja wdrożenia na GitHub Pages

## Krok 1: Sprawdź ustawienia GitHub Pages

1. Idź do swojego repozytorium na GitHub
2. Kliknij **Settings** (Ustawienia)
3. Przewiń w dół do sekcji **Pages**
4. W **Source** wybierz **GitHub Actions** (nie "Deploy from a branch")

## Krok 2: Wypchnij zmiany na GitHub

```bash
git add .
git commit -m "Add GitHub Pages deployment configuration"
git push origin main
```

## Krok 3: Sprawdź deployment

1. Idź do zakładki **Actions** w swoim repozytorium
2. Sprawdź czy workflow "Deploy to GitHub Pages" się uruchomił
3. Jeśli workflow się powiedzie, Twoja strona będzie dostępna pod adresem:
   `https://1Kr3ksu.github.io/e-commerce_allegro/`

## Krok 4: Rozwiązywanie problemów

### Problem: Pusta strona
- Sprawdź czy w Settings > Pages źródło jest ustawione na "GitHub Actions"
- Sprawdź logi w Actions czy build się powiódł

### Problem: 404 dla zasobów
- Wszystkie ścieżki są już skonfigurowane z `/e-commerce_allegro/`
- Obrazy powinny ładować się automatycznie

### Problem: Workflow nie działa
- Sprawdź czy masz uprawnienia do GitHub Pages w repozytorium
- Sprawdź czy repozytorium jest publiczne

## Co zostało skonfigurowane:

✅ **vite.config.js** - dodany base path `/e-commerce_allegro/`
✅ **package.json** - dodany deploy script i gh-pages
✅ **GitHub Actions workflow** - automatyczny deployment
✅ **Build test** - projekt buduje się poprawnie

## Manual deployment (alternatywa):

Jeśli GitHub Actions nie działają, możesz używać:

```bash
npm run deploy
```

To zbuduje projekt i wypchnuje do branch `gh-pages`.