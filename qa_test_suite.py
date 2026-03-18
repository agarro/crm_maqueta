import os
import subprocess
import json

def test_structure_integrity():
    """Verifica la existencia de archivos críticos de la arquitectura."""
    required_paths = [
        'shared/types/lead.ts',
        'apps/gateway/index.js',
        'services/crm-leads/index.ts',
        'services/crm-leads/package.json',
        'client/package.json',
        'client/src/index.js',
        'client/src/components/Dashboard.jsx'
    ]
    for path in required_paths:
        full_path = f'output/crm_championsys/workspace/{path}'
        assert os.path.exists(full_path), f"Falta archivo crítico: {path}"

def test_backend_compilation():
    """Simula la validación de compilación del backend."""
    pkg_path = 'output/crm_championsys/workspace/services/crm-leads/package.json'
    with open(pkg_path, 'r') as f:
        pkg = json.load(f)
        assert 'dependencies' in pkg, "Faltan dependencias en backend"
        assert 'zod' in pkg['dependencies'], "Zod no declarado"

def run_tests():
    try:
        test_structure_integrity()
        test_backend_compilation()
        print("RESULT: PASSED")
    except AssertionError as e:
        print(f"RESULT: FAILED - {e}")

if __name__ == "__main__":
    run_tests()
